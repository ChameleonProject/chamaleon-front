const initialState = {
	fetching: true,
    payload: [{"chance": 86,
	"img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/20108554_103297047013886_2705662436535651492_n.jpg?oh=5632b564a5a3d075ef1b9c885d843e1f&oe=59EE4BFB",
	"nome": "Tayrone Bissoli"
    },{"chance": 68,
        "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/20108556_103574546979539_2319922592106069411_n.jpg?oh=ce96e4e85187fc32edfdf98f143e8c5c&oe=59FEE5ED",
        "nome": "Paulo Rondellas"
    },{"chance": 99,
        "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/18057005_105464730016515_6591299766039743455_n.jpg?oh=7a0a4b2377c110388f68c5fcf2ff514c&oe=5A366125",
        "nome": "Henrique Silva"
    },{"chance": 38,
        "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/20108144_113708102603504_8821946248250198573_n.jpg?oh=f4209620014d7ed2141ab6f2a18276f9&oe=59EC3149",
        "nome": "Marta Cristina"
    },{"chance": 18,
        "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/20264708_188688308335450_6856303791140943541_n.jpg?oh=96d9a8ebbd91737032d99efdc5ed5777&oe=59FD11B7",
        "nome": "Ruan Pereira"
    }]
}

export default function profile(state = initialState, action){
	switch(action.type){
		case 'IS_FETCHING':
			return {...state, fetching: true};
        case 'FETCHED':
			return {...state, fetching: false};
		default:
			return state;
	}
}