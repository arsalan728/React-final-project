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
                          {name:"Peas",price:45.00,image:"peas.jpg"},
                          {name:"Radish",price:69.00,image:"Radish.jpg"},
                          {name:"Beetroot",price:45.00,image:"Beetroot.webp"},
                          {name:"Garlic",price:45.00,image:"Garlic.jpg"},
                          {name:"Kale",price:45.00,image:"Kale.jpg"},
                          {name:"Lattuce",price:45.00,image:"Lattuce.jpg"},
                          {name:"Leeks",price:45.00,image:"Leeks.jpg"},
                          {name:"Spinach",price:45.00,image:"Spinach.jpg"},
                          {name:"Turnip",price:45.00,image:"Turnip.jpg"}
                     ],
               nonVeg: [{ name: "Eggs", price: 42.50 ,image:"eggs.jpg"},
                        { name: "Meat", price: 850.0,image:"Meat.jpg"},
                        { name: "Lamb Chops", price: 850.50 ,image:"LambChops.jpg"},
                        { name: "Lamb Mince", price: 1100.50 ,image:"LambMince.jpg"},
                        { name: "Beef", price: 360.0, image:"Beef.jpg"},
                        { name: "Beef Steak (Raw)", price: 380.50 ,image:"BeefSteak.jpg"},
                        { name: "Beef Mince (Ground Beef)", price: 400.50 ,image:"BeefMince.jpg"},
                        { name: "Chicken", price: 200.0,image:"Chicken.jpg" },
                        { name: "Chicken Breast", price: 250.50 ,image:"ChickenBreast.jpg"},
                        { name: "Chicken Thighs", price: 220.50 ,image:"ChickenThigh.jpg"},
							          { name: "Fish", price: 1100.0 ,image:"Fish.jpg"},
                        { name: "Prawns", price: 1000.0 ,image:"Prawn.jpg"},
                        { name: "Duck Meat", price: 500.50 ,image:"DuckMeat.jpg"},
                        { name: "Turkey Breast", price: 600.50 ,image:"TurkeyBreast.jpg"},
                        { name: "Turkey Legs", price: 680.50 ,image:"TurkeyLegs.jpg"},
                        { name: "Rabbit Meat", price:700.50 ,image:"Rabbit.jpg"},
                        { name: "Quail Meat", price: 100.50 ,image:"QuailMeat.jpg"},
                        { name: "Buffalo Meat", price: 450.50 ,image:"BuffaloMeat.jpg"},
                        { name: "Camel Meat", price: 900.50 ,image:"CamelMeat.jpg"},
                        { name: "Ostrich Meat", price: 1200.0 ,image:"OstrichMeat.jpg"},
                     
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
                                { name: "Skimmed Milk", price:90.0 ,image:"SkimmedMilk.jpg"},
                                { name: "Condensed Milk", price:100.0 ,image:"CondensedMilk.jpg"},
                                { name: "Evaporated Milk", price:104.0 ,image:"EvaporatedMilk.jpg"},
                                { name: "Buttermilk", price:45.0 ,image:"Buttermilk.jpg"},
                                { name: "Amul Fresh Cream (Dairy Cream)", price:120.0 ,image:"AmulFreshCream.jpg"},
                                { name: "Epigamia Greek Yogurt (Blueberry Flavor)", price:125.0 ,image:"EpigamiaGreekYogurt.jpg"},
                                { name: "Amul Butter (Salted Butter)", price:200.0 ,image:"AmulButter.jpg"},
                                { name: "Govardhan Ghee (Pure Cow Ghee)", price:800.0 ,image:"GovardhanGhee.jpg"},
                                { name: "Mother Dairy Paneer (Fresh Cottage Cheese)", price:400.0 ,image:"MotherDairyPaneer.jpg"},
                                { name: "Amul Mozzarella Cheese", price:300.0 ,image:"AmulMozzarellaCheese.jpg"},
                                { name: "Amul Kool (Flavored Milk - Kesar)", price:50.0 ,image:"AmulKool.jpg"},                                
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