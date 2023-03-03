/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function recupMontantImposition(revenus){
    const T1 = 10777;
    const T2 = 27478;
    const T3 = 78570;
    const T4 = 168994;
    
    if (revenus <= T1){
        return 0;
    }
    else if (revenus <= T2){
        return (revenus - T1)/100*11;
    }
    else if (revenus <= T3){
        let impot = ((revenus - T2)*0.3)+((T2 - T1)*0.11);
        return impot.toFixed(2);
    }
    else if (revenus <= T4){
        let impot = ((revenus - T3)*0.41)+((T3 - T2)*0.3)+((T2 - T1)*0.11);
        return impot.toFixed(2);
    }
    else if (revenus > T4){
        let impot = ((revenus - T4)*0.45)+((T4 - T3)*0.41)+((T3 - T2)*0.3)+((T2 - T1)*0.11);
        return impot.toFixed(2);
    }
    
}