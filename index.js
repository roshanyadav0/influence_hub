const express=require("express")
const port=5000;
const app=express();

app.listen(port,()=>{
    console.log("Server has been started")
});

app.get("/app/user/influncers")
app.get("/app/user/influncers/influncer:Id")
app.get("/app/user/teams/team:Id")
app.get("/app/user/collab/collab:Id")
app.get("/app/payment/transaction/tran:Id")
app.get("/app/chat/history")
app.get("/app/connections")
app.get("/app/connections/follow")
app.get("/app/connections/like")
app.get("/app/connections/share")