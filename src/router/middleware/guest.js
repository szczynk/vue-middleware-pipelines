export default function guest ({ next, store }){
    if (store.state.user.loggedIn) {
        return next({
           name: 'dashboard'
        })
    }
   
    return next()
   }