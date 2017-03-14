var MaxLimit=15000;

var twok=4;
var fivehun =3;
var hun=3;

currentAmount=((4*2000)+(3*500)+(3*100));

function withdraw() {
    var WithdrawAmount =parseInt(document.getElementById("withdraw").value);
    var pattern = /^\d+$/;
    if(pattern.test(WithdrawAmount)){
        if( WithdrawAmount <= MaxLimit && WithdrawAmount<=currentAmount){
            if(WithdrawAmount%100==0) {
                if (WithdrawAmount >= 2000) {
                    var Twoth = parseInt(WithdrawAmount / 2000);

                    if (twok <= Twoth) {
                        currentAmount = currentAmount - (2000 * twok);
                        WithdrawAmount = WithdrawAmount - (2000 * twok);
                        twok = 0;

                    }
                    else {
                        console.log(typeof Twoth)
                        currentAmount = currentAmount - (2000 * Twoth);
                        WithdrawAmount = WithdrawAmount - (2000 * Twoth);

                        twok =twok- Twoth;
                        console.log("Remainder Notes of 2000: " + twok);
                    }

                }

                // if (WithdrawAmount >= 500) {
                //     var Fivehundred = WithdrawAmount / 500;
                //
                //     var b = fivehun - Fivehundred;
                //
                //     if (b < 0) {
                //         currentAmount = currentAmount - (500 * fivehun);
                //         WithdrawAmount = WithdrawAmount - (500 * fivehun);
                //
                //         fivehun = 0;
                //
                //     }
                //     else {
                //
                //         currentAmount = currentAmount - (500 * Fivehundred);
                //         WithdrawAmount = WithdrawAmount - (500 * Fivehundred);
                //
                //         fivehun = b;
                //     }
                //
                // }
                //
                // if (WithdrawAmount >= 100) {
                //     var hundred = WithdrawAmount / 100;
                //
                //     var c = hun - hundred;
                //
                //     if (c < 0) {
                //         currentAmount = currentAmount - (100 * hun);
                //         WithdrawAmount = WithdrawAmount - (500 * hun);
                //         hun = 0;
                //     }
                //
                //     else {
                //         currentAmount = currentAmount - (100 * hundred);
                //         WithdrawAmount = WithdrawAmount - (100 * hundred);
                //
                //         hun = c;
                //     }
                //
                //
                // }

            }
            else{

                alert("invalid withdraw of amount not in multiple of 100");
            }

        }

    }

    // console.log(currentAmount);
    // console.log(WithdrawAmount);
    // console.log("2000:"+twok+" - 500:"+fivehun+" - 100:"+hun);


}
