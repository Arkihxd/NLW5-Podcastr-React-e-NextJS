import {createContext, useState, ReactNode, useContext} from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
};

type PlayerContextData = {
    episodeList:Episode[];
    currentEpisode: number;
    isPlaying: boolean;
    isLooping: boolean;
    isShuffling: boolean;
    play: (episode: Episode) => void;
    playList: (list: Episode[], index: number) => void;
    playNext: () => void;
    toggleLoop: () => void;
    clearPlayerState: () => void;
    playPrevious: () => void;
    setPlayingState: (state: boolean) => void;
    togglePlay: () => void;
    toggleShuffle: () => void;
    hasNext: boolean;
    hasPrevious: boolean;
};

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
    children: ReactNode;
}

export function PlayerContextProvider({children}: PlayerContextProviderProps){
    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisode, setCurrentEpisode] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);

    function play(episode: Episode){
        setEpisodeList([episode]);
        setCurrentEpisode(0);
        setIsPlaying(true);
    }

    function playList(list: Episode[], index: number){
        setEpisodeList(list);
        setCurrentEpisode(index); 
        setIsPlaying(true);
    }

    function togglePlay(){
        setIsPlaying(!isPlaying);
    }

    function toggleLoop(){
        setIsLooping(!isLooping);
    }

    function toggleShuffle(){
        setIsShuffling(!isShuffling);
    }

    function setPlayingState(state: boolean){
        setIsPlaying(state);
    }

    function clearPlayerState(){
        setEpisodeList([]);
        setCurrentEpisode(0);
    }

    const hasPrevious = currentEpisode > 0;
    const hasNext = isShuffling || (currentEpisode + 1) < episodeList.length;

    function playNext(){
        if (isShuffling){
            const nextRandomEpisode = Math.floor(Math.random() * episodeList.length)
            setCurrentEpisode(nextRandomEpisode);
        }else if(hasNext){
            setCurrentEpisode(currentEpisode +1);
        }

    }

    function playPrevious(){
       if (hasPrevious){
        setCurrentEpisode(currentEpisode -1)
       }
    }

    return (
        <PlayerContext.Provider value={{episodeList, currentEpisode, play, isPlaying, togglePlay, setPlayingState, playList, playNext, playPrevious, hasNext, hasPrevious, isLooping, toggleLoop, toggleShuffle, isShuffling, clearPlayerState }}>
        {children}
        </PlayerContext.Provider>) 
}

export const userPlayer = () =>{
    return useContext(PlayerContext);
}