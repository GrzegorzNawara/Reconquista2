export const EMPTY_CARD = {
  corner_image:'./images/card-corner-big-y.png',
  image:'./images/iso-big-y.png',
  header: '...',
  piece_height:0,
  war_strength:0
}
export const KING_CARD = {
  corner_image:'./images/card-corner-big-y.png',
  image:'./images/iso-big-y.png',
  header: 'Król',
  piece_height:35,
  war_strength:2
}
export const REBEL_CARD = {
  corner_image:'./images/card-corner-big-k.png',
  image:'./images/iso-big-k.png',
  header: 'Buntownik',
  piece_height:35,
  war_strength:2
}
export const LEVY_CARD = {
  corner_image:'./images/card-corner-big-r.png',
  image:'./images/iso-big-r.png',
  header: 'Poborca',
  piece_height:35,
  war_strength:2
}
export const FARMER_CARD = {
  corner_image:'./images/card-corner-small-k.png',
  image:'./images/iso-small-k.png',
  header: 'Chłop',
  piece_height:10,
  war_strength:1
}
export const MERCHANT_CARD = {
  corner_image:'./images/card-corner-small-r.png',
  image:'./images/iso-small-r.png',
  header: 'Kupiec',
  piece_height:10,
  war_strength:1
}
export const KNIGHT_CARD = {
  corner_image:'./images/card-corner-small-y.png',
  image:'./images/iso-small-y.png',
  header: 'Rycerz',
  piece_height:10,
  war_strength:1
}
export const ENEMY_CARD = {
  corner_image:'./images/card-corner-enemy.png',
  image:'./images/iso-enemy.png',
  header: 'Wróg',
  piece_height:0,
  war_strength:-2
}
export const HOUSE_CARD = {
  corner_image:'./images/card-corner-enemy.png',
  image:'./images/iso-house.png',
  header: 'Targ',
  piece_height:0,
  war_strength:0
}

export const EVENT_CARD = {
  card_type:'SHOW_INFO_CARD',
  corner_image:'./images/card-corner-event.png',
  header: 'Zdarzenie',
  visible: 1
}

export const SHOW_MOVE_CARD = {
  card_type:'SHOW_INFO_CARD',
  mid_image:'./images/card-mid-move.png',
  text: 'Możesz się poruszyć albo spalić tą kartę',
  visible: 1
}
export const SHOW_ENEMY_CARD = {
  card_type:'SHOW_PIECE_CARD',
  mid_image:'./images/card-mid-enemy.png',
  text: 'Możesz zobaczyć, gdzie są wrogowie',
  visible: 1
}
export const SHOW_GAMEOVER_CARD = {
  card_type:'SHOW_PIECE_CARD',
  mid_image:'./images/card-mid-gameover.png',
  text: 'Nadeszła zima. Minął kolejny rok. Koniec gry.',
  visible: 1
}
export const SHOW_GAMESTART_CARD = {
  card_type:'SHOW_PIECE_CARD',
  mid_image:'./images/card-mid-gamestart.png',
  text: 'Nadeszła wiosna. Rozpoczyna się gra.',
  visible: 1
}

export const EXEC_MOVE_CARD = {
  card_type:'MOVE_PIECE_CARD',
  visible: 0
}
export const EXEC_ENEMY_CARD = {
  card_type:'SHOW_PIECE_CARD',
  visible: 0
}

export const findHeaderCardById = (piece_id) => {
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
      return EMPTY_CARD;
  }
}

export const findShowCardById = (piece_id) => {
  switch (piece_id) {
    case 'king1':
    case 'knight1':
    case 'knight2':
    case 'levy1':
    case 'merchant1':
    case 'merchant2':
    case 'merchant3':
    case 'rebel1':
    case 'farmer1':
    case 'farmer2':
    case 'farmer3':
    case 'farmer4':
    case 'farmer5':
    case 'farmer6':
    case 'farmer7':
    case 'farmer8':
    case 'farmer9':
      return SHOW_MOVE_CARD;
    case 'house1':
    case 'house2':
    case 'house3':
      return 'UNKNOWN_SHOW_CARD_TYPE';
    case 'enemy1':
    case 'enemy2':
    case 'enemy3':
    case 'enemy4':
    case 'enemy5':
    case 'enemy6':
    case 'enemy7':
    case 'enemy8':
    case 'enemy9':
      return SHOW_ENEMY_CARD;
    default:
      return 'UNKNOWN_SHOW_CARD_TYPE';
  }
}

export const findExecCardById = (piece_id) => {
  switch (piece_id) {
    case 'king1':
    case 'knight1':
    case 'knight2':
    case 'levy1':
    case 'merchant1':
    case 'merchant2':
    case 'merchant3':
    case 'rebel1':
    case 'farmer1':
    case 'farmer2':
    case 'farmer3':
    case 'farmer4':
    case 'farmer5':
    case 'farmer6':
    case 'farmer7':
    case 'farmer8':
    case 'farmer9':
      return EXEC_MOVE_CARD;
    case 'house1':
    case 'house2':
    case 'house3':
      return 'UNKNOWN_SHOW_CARD_TYPE';
    case 'enemy1':
    case 'enemy2':
    case 'enemy3':
    case 'enemy4':
    case 'enemy5':
    case 'enemy6':
    case 'enemy7':
    case 'enemy8':
    case 'enemy9':
      return EXEC_ENEMY_CARD;
    default:
      return 'UNKNOWN_SHOW_CARD_TYPE';
  }
}
