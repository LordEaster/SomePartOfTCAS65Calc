export function TCAS65CalcFunc() {

    // define
    let GPAX = document.getElementById("GPAXSc").value;
    let GAT1 = document.getElementById("GAT1Sc").value;
    let GAT2 = document.getElementById("GAT2Sc").value;
    let PAT1 = document.getElementById("PAT1Sc").value;
    let PAT2 = document.getElementById("PAT2Sc").value;
    let PAT3 = document.getElementById("PAT3Sc").value;
    let PAT4 = document.getElementById("PAT4Sc").value;
    let PAT5 = document.getElementById("PAT5Sc").value;
    let PAT6 = document.getElementById("PAT6Sc").value;
    let PAT71 = document.getElementById("PAT71Sc").value;
    let PAT72 = document.getElementById("PAT72Sc").value;
    let PAT73 = document.getElementById("PAT73Sc").value;
    let PAT74 = document.getElementById("PAT74Sc").value;
    let PAT75 = document.getElementById("PAT75Sc").value;
    let PAT76 = document.getElementById("PAT76Sc").value;
    let PAT77 = document.getElementById("PAT77Sc").value;
    let SAMAN09 = document.getElementById("SAMAN09Sc").value;
    let SAMAN19 = document.getElementById("SAMAN19Sc").value;
    let SAMAN29 = document.getElementById("SAMAN29Sc").value;
    let SAMAN39 = document.getElementById("SAMAN39Sc").value;
    let SAMAN49 = document.getElementById("SAMAN49Sc").value;
    let SAMAN59 = document.getElementById("SAMAN59Sc").value;
    let SAMAN69 = document.getElementById("SAMAN69Sc").value;
    let SAMAN89 = document.getElementById("SAMAN89Sc").value;
    let SAMAN99 = document.getElementById("SAMAN99Sc").value;

    // Perc Section
    let GPAXPerc = document.getElementById("GPAXPerc").value;
    let GAT1Perc = document.getElementById("GAT1Perc").value;
    let GAT2Perc = document.getElementById("GAT2Perc").value;
    let PAT1Perc = document.getElementById("PAT1Perc").value;
    let PAT2Perc = document.getElementById("PAT2Perc").value;
    let PAT3Perc = document.getElementById("PAT3Perc").value;
    let PAT4Perc = document.getElementById("PAT4Perc").value;
    let PAT5Perc = document.getElementById("PAT5Perc").value;
    let PAT6Perc = document.getElementById("PAT6Perc").value;
    let PAT71Perc = document.getElementById("PAT71Perc").value;
    let PAT72Perc = document.getElementById("PAT72Perc").value;
    let PAT73Perc = document.getElementById("PAT73Perc").value;
    let PAT74Perc = document.getElementById("PAT74Perc").value;
    let PAT75Perc = document.getElementById("PAT75Perc").value;
    let PAT76Perc = document.getElementById("PAT76Perc").value;
    let PAT77Perc = document.getElementById("PAT77Perc").value;
    let SAMAN09Perc = document.getElementById("SAMAN09Perc").value;
    let SAMAN19Perc = document.getElementById("SAMAN19Perc").value;
    let SAMAN29Perc = document.getElementById("SAMAN29Perc").value;
    let SAMAN39Perc = document.getElementById("SAMAN39Perc").value;
    let SAMAN49Perc = document.getElementById("SAMAN49Perc").value;
    let SAMAN59Perc = document.getElementById("SAMAN59Perc").value;
    let SAMAN69Perc = document.getElementById("SAMAN69Perc").value;
    let SAMAN89Perc = document.getElementById("SAMAN89Perc").value;
    let SAMAN99Perc = document.getElementById("SAMAN99Perc").value;

    const sum = ((GPAX/4*GPAXPerc)+
    (GAT1/150*GAT1Perc)+
    (GAT2/150*GAT2Perc)+
    (PAT1/300*PAT1Perc)+
    (PAT2/300*PAT2Perc)+
    (PAT3/300*PAT3Perc)+
    (PAT4/300*PAT4Perc)+
    (PAT5/300*PAT5Perc)+
    (PAT6/300*PAT6Perc)+
    (PAT71/300*PAT71Perc)+
    (PAT72/300*PAT72Perc)+
    (PAT73/300*PAT73Perc)+
    (PAT74/300*PAT74Perc)+
    (PAT75/300*PAT75Perc)+
    (PAT76/300*PAT76Perc)+
    (PAT77/300*PAT77Perc)+
    (SAMAN09/100*SAMAN09Perc)+
    (SAMAN19/100*SAMAN19Perc)+
    (SAMAN29/100*SAMAN29Perc)+
    (SAMAN39/100*SAMAN39Perc)+
    (SAMAN49/100*SAMAN49Perc)+
    (SAMAN59/100*SAMAN59Perc)+
    (SAMAN69/100*SAMAN69Perc)+
    (SAMAN89/100*SAMAN89Perc)+
    (SAMAN99/100*SAMAN99Perc)
    )/100
    
    const sum100 = sum * 100;
    const sum30k = sum * 30000;
    
    document.getElementById("sumscore100").innerHTML = sum100;
    document.getElementById("sumscore30k").innerHTML = sum30k;
}


