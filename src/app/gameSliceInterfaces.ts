interface GameConditionals {
  isLoading: boolean;
  isAppRunning: boolean;
  isImageClicked: boolean;
  isCopy: boolean;
}

interface GameTimeState {
  start: string;
  end: string;
}

interface MemeState {
  id: string;
  name: string;
  url: string;
  urlBack: string;
  selected: boolean;
}

interface GameStatsState {
  stepCount: number;
  gameTimes: GameTimeState[];
  wrongMatches: number;
}

interface SingleGameState {
  gameData: MemeState[];
  matchedImages: string[];
  selectedImages: string[];
  error: string;
  gameStats: GameStatsState;
  gameConditionals: GameConditionals;
}

interface Game {
  singleGame: SingleGameState;
  gameCopies: SingleGameState[];
}

interface GameMainState {
  game: Game;
}

export type {
  GameConditionals,
  GameTimeState,
  MemeState,
  GameStatsState,
  SingleGameState,
  Game,
  GameMainState,
};
