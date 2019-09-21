$(document).ready(function() {
    //hide the fighter before Character is chosen
    $("#Fighters").hide();

    var chosenHp=0;
    var chosenDam=0;
    var FighterHp=0;
    var FighterDam=0;
    var InitialDam=0;
    var hadpreFighter=false;

    var isLukechosen=false;
    var isLeiachosen=false;
    var isDarthchosen=false;
    var isYodachosen=false;
    //array of characters' condition
    var Luke={
        name:"Luke",
        Damage:12,
        Hp:190,
    }

    var Darth={
        name :"Darth",
        Damage:15,
        Hp:150,
    }

    var Yoda={
        name :"Yoda",
        Damage:30,
        Hp:120,
    }

    var Leia={
        name : "Leia",
        Damage:4,
        Hp: 240,
    }

    
    //on click function
        $("#Luke").click(function(event) {
            chosenDam=Luke.Damage;
            chosenHp=Luke.Hp;
            InitialDam=Luke.Damage;
            $("#chosen-Character").append("<img src='assets/image/luke.jpg' type='image'>");
            $("#chosen-Hp").text(Luke.Hp);
            $("#YourCharacters").hide();
            $("#Fighters").show();
            $("#LukeGroup").hide();
        });

        $("#Leia").click(function(event) {
            chosenDam=Leia.Damage;
            chosenHp=Leia.Hp;
            InitialDam=Leia.Damage;
            $("#chosen-Character").append("<img src='assets/image/Leia.jpg' type='image'>");
            $("#chosen-Hp").text(Luke.Hp);
            $("#YourCharacters").hide();
            $("#Fighters").show();
            $("#LeiaGroup").hide();
        });

        $("#Darth").on("click", function() {
            chosenDam=Darth.Damage;
            chosenHp=Darth.Hp;
            InitialDam=Darth.Damage;
            $("#chosen-Character").append("<img src='assets/image/Darth.jpg' type='image'>");
            $("#chosen-Hp").text(Darth.Hp);
            $("#YourCharacters").hide();
            $("#Fighters").show();
            $("#DarthGroup").hide();
        });

        $("#Yoda").on("click", function() {
            chosenDam=Yoda.Damage;
            chosenHp=Yoda.Hp;
            InitialDam=Yoda.Damage;
            $("#chosen-Character").append("<img src='assets/image/Yoda.jpg' type='image'>");
            $("#chosen-Hp").text(Yoda.Hp);
            $("#YourCharacters").hide();
            $("#Fighters").show();
            $("#YodaGroup").hide();
        });
    
    //Fighter Section
    $("#LukeAsFighter").on("click", function() {
        FighterDam=Luke.Damage;
        FighterHp=Luke.Hp;
        isLukechosen=true;
        $("#Fighter-Hp").text(Luke.Hp);
        $("#Fighters").hide();
        //use Attr to change img if there is a pre fighter
        if(hadpreFighter===true){
            $("#img").attr("src","assets/image/luke.jpg");
        }else{
            $("#chosen-Fighter").append("<img id='img' src='assets/image/luke.jpg' type='image'>");
        }
    });

    $("#LeiaAsFighter").on("click", function() {
        FighterDam=Leia.Damage;
        FighterHp=Leia.Hp;
        isLeiachosen=true;
        $("#Fighter-Hp").text(Leia.Hp);
        $("#Fighters").hide();
        //use Attr to change img if there is a pre fighter
        if(hadpreFighter===true){
            $("#img").attr("src","assets/image/Leia.jpg");
        }else{
            $("#chosen-Fighter").append("<img id='img' src='assets/image/Leia.jpg' type='image'>");
        }
    });

    $("#DarthAsFighter").on("click", function() {
        FighterDam=Darth.Damage;
        FighterHp=Darth.Hp;
        isDarthchosen=true;
        $("#Fighter-Hp").text(Darth.Hp);
        $("#Fighters").hide();
        //use Attr to change img if there is a pre fighter
        if(hadpreFighter==true){
            $("#img").attr('src','assets/image/Darth.jpg');
        }else{
            $("#chosen-Fighter").append("<img id='img' src='assets/image/Darth.jpg' type='image'>");
        }
    });

    $("#YodaAsFighter").on("click", function() {
        FighterDam=Yoda.Damage;
        FighterHp=Yoda.Hp;
        isYodachosen=true;
        $("#Fighter-Hp").text(Yoda.Hp);
        $("#Fighters").hide();
        //use Attr to change img if there is a pre fighter
        if(hadpreFighter===true){
            $("#img").attr("src","assets/image/Yoda.jpg");
        }else{
            $("#chosen-Fighter").append("<img id='img' src='assets/image/Yoda.jpg' type='image'>");
        }
    });

    
    
    //Attack button
    $("#Attack").on("click", function() {
        //if all fighters are gone
        if(isDarthchosen==true&&isLeiachosen==true&&isLukechosen==true&&isYodachosen==true){
            alert("You Win!!");
        }
        chosenHp=chosenHp-FighterDam;
        FighterHp=FighterHp-chosenDam;
        chosenDam=chosenDam*2;

        console.log(chosenDam);
        console.log(chosenHp);
        console.log(FighterDam);
        console.log(FighterHp);
        
        $("#Fighter-Hp").text(FighterHp);
        $("#chosen-Hp").text(chosenHp);
        //when defeat the enemy
        if(FighterHp<0){
            FighterDam=0;
            FighterHp=0;
            chosenDam=InitialDam;

            $("#Fighters").show();
            if(isLukechosen===true){
                $("#LukeGroup").hide();
            }else if(isLeiachosen===true){
                $("#LeiaGroup").hide();
            }else if(isYodachosen===true){
                $("#YodaGroup").hide();
            }else if(isDarthchosen===true){
                $("#DarthGroup").hide();
            }else{
                null;
            }
            hadpreFighter=true;
            alert("you just defeat your enemy,selected another fighter");
        }
        
        if(chosenHp<0){
            alert("Game overrr....");
            $("#YourCharacters").hide();
            $("#Fighter").hide();
            $("#YourCharacters").hide();
            $("#Defender").hide();
            $("#Attack").hide();
            document.write("You are deafted");
        }
    });



});