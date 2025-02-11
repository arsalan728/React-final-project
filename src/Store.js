import { configureStore, createSlice } from "@reduxjs/toolkit";



//create the slice 
const productsSlice = createSlice({
    name: 'products',
    initialState: {  veg: 
                          [{name:"Potato",price:40.00,image:"potato.jpg"},
                          {name:"Tomato",price:20.00,image:"tomato.jpg"},
                          {name:"Cabbage",price:100.00,image:"cabbage.jpg"},
                          {name:"Carrot",price:70.00,image:"carrot.jpg"},
                          {name:"Onion",price:50.00,image:"onion.jpg"},
                          {name:"Brinjal",price:80.00,image:"brinjal.jpg"},
                          {name:"Capsicum",price:30.00,image:"capsicum.jpg"},
                          {name:"CauliFlower",price:60.00,image:"cauliflower.jpg"},
                          {name:"LadyFinger",price:40.00,image:"ladyfinger.jpg"},
                          {name:"Lemon",price:70.00,image:"lemon.jpg"},
                          {name:"Cucumber",price:65.00,image:"cucumber.jpg"},
                          {name:"Peas",price:45.00,image:"peas.jpg"}


                     ],
               nonVeg: [{ name: "Meat", price: 850.0,image:"Meat.jpg"},
                        { name: "Beef", price: 360.0, image:"Beef.jpg"},
                        { name: "Chicken", price: 800.0,image:"Chicken.jpg" },
							          { name: "Fish", price: 1100.0 ,image:"Fish.jpg"},
                        { name: "Prawns", price: 1000.0 ,image:"Prawn.jpg"},
                        { name: "Eggs", price: 42.50 ,image:"eggs.jpg"},



							],
                            milkItems:[{ name: "Masqati", price: 100.0,image:"Masqati.jpg"},
                                {name: "Amul", price: 80.0,image:"Amul.jpg"},
                                {name: "GoodLife", price: 60.0,image:"GoodLife.jpg"},
                                { name: "MotherDairy", price: 90.0,image:"MotherDairy.jpg" },
                                { name: "Vijaya", price: 89.0 ,image:"Vijaya.jpg"},
                                { name: "Heritage", price:120.0 ,image:"heritage.jpg"},
                                { name: "Nestle", price: 106.0 ,image:"nestle.jpg"},
                                { name: "Paras", price:90.0 ,image:"paras.jpg"},
                                { name: "Britannia", price:102.0 ,image:"britannia.jpg"},
                            ]
				  },
    reducers: {}
  }
)
 const cartSlice=createSlice(
  {
    name:'cart',
    initialState:[],
    reducers:{
      addToCart:(state,action)=>{
        const item=state.find(item=>item.name===action.payload.name);
        if(item){
          item.quantity=item.quantity+1;
        }
        else{
            state.push({...action.payload,quantity:1});
        }
      },
     
        increment:(state,action)=>{
          const item=state.find(item=>item.name===action.payload.name);
          if(item){
            item.quantity=item.quantity+1;
          }
      },

        decrement:(state,action)=>{
          const item=state.find(item=>item.name===action.payload.name);
          if(item && item.quantity>1){
            item.quantity=item.quantity-1;
          }
          else{
             return  state.filter(item=>item.name!==action.payload.name);
          }
      },
      remove:(state,action)=>{
        return state.filter(item=>item.name!==action.payload.name);
      },
      clearCart:()=>[]
    }
    
  }
)


/*loginlogout*/

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("username") ? true : false,
    user: localStorage.getItem("username") || "",
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;  // Use payload to set the user
      localStorage.setItem("username", action.payload);  // Save to localStorage
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = "";
      localStorage.removeItem("username");  // Remove from localStorage
    },
  },
});



/*end*/ 
//create the slice
let purchaseDetailsSlice=createSlice({
  name:"purchaseDetails",
  initialState:[],
  reducers:{
    addPurchaseDetails:(state,action)=>{
      state.push(action.payload)
    }
  }
})
//configure the store 
const store = configureStore({
  reducer: {
      products: productsSlice.reducer, 
      cart: cartSlice.reducer,
      purchaseDetails:purchaseDetailsSlice.reducer,
      auth:authSlice.reducer

  }
});

//export the store 
//should not export below one 
//export const {addToCart}=cartSlice.reducer;
export const {addToCart,increment,decrement,remove,clearCart } = cartSlice.actions;
export default store;
export const{addPurchaseDetails}=purchaseDetailsSlice.actions;
export const { login, logout } = authSlice.actions;