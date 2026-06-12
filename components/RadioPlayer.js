import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Audio } from 'expo-av';
import { RADIO } from '../data';

const RadioContext = createContext({ playing: false, loading: false, toggle: () => {} });

export function RadioProvider({ children }) {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
    }).catch(() => {});
    return () => {
      soundRef.current?.unloadAsync().catch(() => {});
    };
  }, []);

  const toggle = async () => {
    if (loading) return;
    try {
      if (playing && soundRef.current) {
        await soundRef.current.pauseAsync();
        setPlaying(false);
        return;
      }
      setLoading(true);
      if (!soundRef.current) {
        const { sound } = await Audio.Sound.createAsync(
          { uri: RADIO.streamUrl },
          { shouldPlay: true }
        );
        soundRef.current = sound;
      } else {
        await soundRef.current.playAsync();
      }
      setPlaying(true);
    } catch (e) {
      console.warn('Radio stream failed to start', e);
      setPlaying(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RadioContext.Provider value={{ playing, loading, toggle }}>
      {children}
    </RadioContext.Provider>
  );
}

export function useRadio() {
  return useContext(RadioContext);
}
