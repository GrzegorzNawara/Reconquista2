export const KING_CARD = {
  corner_image:'./images/card-corner-big-y.png',
  image:'./images/iso-big-y.png',
  header: 'Król',
  war_strength:2
}
export const REBEL_CARD = {
  corner_image:'./images/card-corner-big-k.png',
  image:'./images/iso-big-k.png',
  header: 'Buntownik',
  war_strength:2
}
export const LEVY_CARD = {
  corner_image:'./images/card-corner-big-r.png',
  image:'./images/iso-big-r.png',
  header: 'Poborca',
  war_strength:2
}
export const FARMER_CARD = {
  corner_image:'./images/card-corner-small-k.png',
  image:'./images/iso-small-k.png',
  header: 'Chłop',
  war_strength:1
}
export const MERCHANT_CARD = {
  corner_image:'./images/card-corner-small-r.png',
  image:'./images/iso-small-r.png',
  header: 'Kupiec',
  war_strength:1
}
export const KNIGHT_CARD = {
  corner_image:'./images/card-corner-small-y.png',
  image:'./images/iso-small-y.png',
  header: 'Rycerz',
  war_strength:1
}
export const ENEMY_CARD = {
  corner_image:'./images/card-corner-enemy.png',
  header: 'Wróg',
  image:'./images/iso-enemy.png',
  war_strength:-2
}
export const HOUSE_CARD = {
  corner_image:'./images/card-corner-enemy.png',
  header: 'Targ',
  image:'./images/iso-house.png',
  war_strength:0
}
export const findCardById = (piece_id) => {
  switch (piece_id) {
    case 'king1':
      return KING_CARD;
    case 'knight1':
    case 'knight2':
      return KNIGHT_CARD;
    case 'levy1':
      return LEVY_CARD;
    case 'merchant1':
    case 'merchant2':
    case 'merchant3':
      return MERCHANT_CARD;
    case 'house1':
    case 'house2':
    case 'house3':
      return HOUSE_CARD;      
    case 'rebel1':
      return REBEL_CARD;
    case 'farmer1':
    case 'farmer2':
    case 'farmer3':
    case 'farmer4':
    case 'farmer5':
    case 'farmer6':
    case 'farmer7':
    case 'farmer8':
    case 'farmer9':
      return FARMER_CARD;
    case 'enemy1':
    case 'enemy2':
    case 'enemy3':
    case 'enemy4':
    case 'enemy5':
    case 'enemy6':
    case 'enemy7':
    case 'enemy8':
    case 'enemy9':
      return ENEMY_CARD;
    default:
      return KING_CARD;
  }
}

export const EVENT_CARD = {
  corner_image:'./images/card-corner-event.png',
  header: 'Zdarzenie'
}

export const SHOW_MOVE_CARD = {
  card_type:'SHOW_CARD',
  mid_image:'./images/card-mid-move.png',
  text: 'Możesz się poruszyć albo spalić tą kartę'
}
export const SHOW_ENEMY_CARD = {
  card_type:'SHOW_CARD',
  mid_image:'./images/card-mid-enemy.png',
  text: 'Możesz zobaczyć, gdzie są wrogowie'
}
export const SHOW_GAMEOVER_CARD = {
  card_type:'SHOW_CARD',
  mid_image:'./images/card-mid-gameover.png',
  text: 'Nadeszła zima. Minął kolejny rok. Koniec gry.'
}
export const SHOW_GAMESTART_CARD = {
  card_type:'SHOW_CARD',
  mid_image:'./images/card-mid-gamestart.png',
  text: 'Nadeszła wiosna. Rozpoczyna się gra.'
}

export const EXEC_MOVE_CARD = {
  card_type:'MOVE_PIECE'
}
export const EXEC_ENEMY_CARD = {
  card_type:'SHOW_ENEMY'
}
