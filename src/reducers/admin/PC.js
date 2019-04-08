import {ADMIN_PC_SEARCH_KEY_CHNAGED} from '../../constants/ActionTypes';

const INIT_STATE = {
    searchKey:'',
    pcs: [
        {
          id: 1,
          name: '2009CSP1'
        },{
          id: 2,
          name: '2009CSP2'
        },{
          id: 3,
          name: '2009CSP3'
        },{
          id: 4,
          name: '2009CSP4'
        },{
          id: 5,
          name: '2009CSP5'
        },{
          id: 6,
          name: '2009CSP6'
        },{
          id: 7,
          name: '2009CSP7'
        },{
          id: 8,
          name: '2009CSP8'
        },{
          id: 9,
          name: '2009CSP9'
        },{
          id: 10,
          name: '2009CSP10'
        }
      ]
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADMIN_PC_SEARCH_KEY_CHNAGED: {
            return {
                ...state,
                searchKey: action.payload
            }
        }
        default:
            return state;
    }
}
