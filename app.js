new Vue({

    el:"#my-block",
    data:
    {
        x:0,
        y:0
    },
    methods:
    {
    update:function(event)
    {
        console.log(event);
        this.x=event.offsetX;
        this.y=event.offsetY;
    }
    }
})