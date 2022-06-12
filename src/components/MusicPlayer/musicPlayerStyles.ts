const MusicPlayerDiv = {
  position: 'absolute' as 'absolute',
  top: 0,
  right: 0,
  zIndex: 22,
  display: 'flex',
  flexDirection: 'column' as 'column',
  margin: '1rem'
}

const Player = {
  opacity: 0.5,
}

const ToggleButtonDiv = {
  display: 'flex',

}

const ToggleButton = {
  color: 'white',
  alignSelf: 'flex-end'
}
  
export const styles = {
  MusicPlayerDiv: MusicPlayerDiv,
  Player: Player,
  ToggleButton: ToggleButton,
  ToggleButtonDiv: ToggleButtonDiv
}