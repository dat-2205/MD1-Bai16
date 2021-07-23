let tinnhangui ='';
let tinnhanden = ''
let Mobile = function(id) {
    this.id = id
    this.Battery = 100;
    this.Draft;
    this.sentMess = [];
    this.inboxMess = [];
    this.status = false;
    this.Onoffstatus = function() {
        if(this.status==false){
            return false;
        }else {
            return true;
        }
    };
    this.Onoff = function () {
        if(this.Onoffstatus()==false){
            this.status = true;
            document.getElementById('status').innerHTML = "Bật máy"
        }else{
            this.status = false
            document.getElementById("status").innerHTML = "Tắt máy"
        }
    }
    this.getBattery = function () {
        this.Battery =100;
        this.checkBattery()
    }
    this.draftMessage = function (draft) {
        if(this.status==false){
            document.getElementById('status').innerHTML = "Máy đang tắt";
        }else{
            this.checkBattery()
            document.getElementById("draft").innerHTML = draft;
            return (this.Draft = draft);
        }
    }
    this.saveinMessage = function (id) {
        if(this.status==false){
            document.getElementById('status').innerHTML = "saveinMess không thành công"
        }else{
            this.Battery--;
            this.checkBattery()
            return (listMobile[id].inboxMess.push(mess));
        }
    }
    this.saveoutMessage = function (mess,num) {
        if (this.status==false){
            document.getElementById('status').innerHTML = "saveoutMess không thành công"
        }else{
            this.Battery--;
            this.checkBattery();
           parseInt(num);
           listMobile[num].inboxMess.push(mess);
            return (this.sentMess.push(mess));
        }
    }
    this.showInboxMessage = function () {
        if(this.status==false){
            document.getElementById('status').innerHTML = "showSentMess không thành công"
        }else{
            this.Battery--;
            for (i=0;i<this.inboxMess.length;i++){
                tinnhanden += this.inboxMess[i] + "  ;";
            }
            document.getElementById("mess").innerHTML = tinnhanden
            this.checkBattery()
        }
    }
    this.showSentMessage = function () {
        if(this.status==false){
            document.getElementById('status').innerHTML = "showSentMess không thành công"
        }else{
            this.Battery--;
            for (i=0;i<this.sentMess.length;i++){
                tinnhangui += this.sentMess[i]+ "  ;";
            }
            document.getElementById("mess").innerHTML = tinnhangui
            this.checkBattery()
        }
    }
    this.checkBattery = function () {
        document.getElementById("battery").innerHTML = this.Battery;
    }
}
let a = new Mobile(1);

let b = new Mobile(2);

let listMobile = [a,b]

for(i=0;i<listMobile.length;i++){
    document.getElementById('sendto').innerHTML += `<option value="${i}">${i}</option>`;
}

// let c = new Mobile();