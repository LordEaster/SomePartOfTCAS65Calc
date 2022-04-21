    export function USEPerc() {

            // Check Section
    let checkGPAX = document.getElementById("GPAXC");
    let checkGAT1 = document.getElementById("GAT1C");
    let checkGAT2 = document.getElementById("GAT2C");
    let checkPAT1 = document.getElementById("PAT1C");
    let checkPAT2 = document.getElementById("PAT2C");
    let checkPAT3 = document.getElementById("PAT3C");
    let checkPAT4 = document.getElementById("PAT4C");
    let checkPAT5 = document.getElementById("PAT5C");
    let checkPAT6 = document.getElementById("PAT6C");
    let checkPAT71 = document.getElementById("PAT71C");
    let checkPAT72 = document.getElementById("PAT72C");
    let checkPAT73 = document.getElementById("PAT73C");
    let checkPAT74 = document.getElementById("PAT74C");
    let checkPAT75 = document.getElementById("PAT75C");
    let checkPAT76 = document.getElementById("PAT76C");
    let checkPAT77 = document.getElementById("PAT77C");
    let checkSAMAN09 = document.getElementById("SAMAN09C");
    let checkSAMAN19 = document.getElementById("SAMAN19C");
    let checkSAMAN29 = document.getElementById("SAMAN29C");
    let checkSAMAN39 = document.getElementById("SAMAN39C");
    let checkSAMAN49 = document.getElementById("SAMAN49C");
    let checkSAMAN59 = document.getElementById("SAMAN59C");
    let checkSAMAN69 = document.getElementById("SAMAN69C");
    let checkSAMAN89 = document.getElementById("SAMAN89C");
    let checkSAMAN99 = document.getElementById("SAMAN99C");


// PercBox Section
    let GPAXPBox = document.getElementById("GPAXPBox");
    let GAT1PBox = document.getElementById("GAT1PBox");
    let GAT2PBox = document.getElementById("GAT2PBox");
    let PAT1PBox = document.getElementById("PAT1PBox");
    let PAT2PBox = document.getElementById("PAT2PBox");
    let PAT3PBox = document.getElementById("PAT3PBox");
    let PAT4PBox = document.getElementById("PAT4PBox");
    let PAT5PBox = document.getElementById("PAT5PBox");
    let PAT6PBox = document.getElementById("PAT6PBox");
    let PAT71PBox = document.getElementById("PAT71PBox");
    let PAT72PBox = document.getElementById("PAT72PBox");
    let PAT73PBox = document.getElementById("PAT73PBox");
    let PAT74PBox = document.getElementById("PAT74PBox");
    let PAT75PBox = document.getElementById("PAT75PBox");
    let PAT76PBox = document.getElementById("PAT76PBox");
    let PAT77PBox = document.getElementById("PAT77PBox");
    let SAMAN09PBox = document.getElementById("SAMAN09PBox");
    let SAMAN19PBox = document.getElementById("SAMAN19PBox");
    let SAMAN29PBox = document.getElementById("SAMAN29PBox");
    let SAMAN39PBox = document.getElementById("SAMAN39PBox");
    let SAMAN49PBox = document.getElementById("SAMAN49PBox");
    let SAMAN59PBox = document.getElementById("SAMAN59PBox");
    let SAMAN69PBox = document.getElementById("SAMAN69PBox");
    let SAMAN89PBox = document.getElementById("SAMAN89PBox");
    let SAMAN99PBox = document.getElementById("SAMAN99PBox");

// Perc Section
    let GPAXPerc = document.getElementById("GPAXPerc");
    let GAT1Perc = document.getElementById("GAT1Perc");
    let GAT2Perc = document.getElementById("GAT2Perc");
    let PAT1Perc = document.getElementById("PAT1Perc");
    let PAT2Perc = document.getElementById("PAT2Perc");
    let PAT3Perc = document.getElementById("PAT3Perc");
    let PAT4Perc = document.getElementById("PAT4Perc");
    let PAT5Perc = document.getElementById("PAT5Perc");
    let PAT6Perc = document.getElementById("PAT6Perc");
    let PAT71Perc = document.getElementById("PAT71Perc");
    let PAT72Perc = document.getElementById("PAT72Perc");
    let PAT73Perc = document.getElementById("PAT73Perc");
    let PAT74Perc = document.getElementById("PAT74Perc");
    let PAT75Perc = document.getElementById("PAT75Perc");
    let PAT76Perc = document.getElementById("PAT76Perc");
    let PAT77Perc = document.getElementById("PAT77Perc");
    let SAMAN09Perc = document.getElementById("SAMAN09Perc");
    let SAMAN19Perc = document.getElementById("SAMAN19Perc");
    let SAMAN29Perc = document.getElementById("SAMAN29Perc");
    let SAMAN39Perc = document.getElementById("SAMAN39Perc");
    let SAMAN49Perc = document.getElementById("SAMAN49Perc");
    let SAMAN59Perc = document.getElementById("SAMAN59Perc");
    let SAMAN69Perc = document.getElementById("SAMAN69Perc");
    let SAMAN89Perc = document.getElementById("SAMAN89Perc");
    let SAMAN99Perc = document.getElementById("SAMAN99Perc");

        if (checkGPAX.checked === true){
            GPAXPBox.style.display = "grid";
            } 
        else {
            GPAXPBox.style.display = "none";
                GPAXPerc.value = 0;
        }
    
        if (checkGAT1.checked === true){
          GAT1PBox.style.display = "grid";
    
            } 
        else {
          GAT1PBox.style.display = "none";
            GAT1Perc.value = 0;
        }
        if (checkGAT2.checked === true){
          GAT2PBox.style.display = "grid";
    
            } 
        else {
            GAT2PBox.style.display = "none";
                GAT2Perc.value = 0;
            }
        if (checkPAT1.checked === true){
            PAT1PBox.style.display = "grid";
        
            }
        else {
            PAT1PBox.style.display = "none";
                PAT1Perc.value = 0;
            }
        if (checkPAT2.checked === true){
            PAT2PBox.style.display = "grid";
        
            }
        else {
            PAT2PBox.style.display = "none";
                PAT2Perc.value = 0;
            }
        if (checkPAT3.checked === true){
            PAT3PBox.style.display = "grid";
        
            }
        else {
            PAT3PBox.style.display = "none";
                PAT3Perc.value = 0;
            }
        if (checkPAT4.checked === true){
            PAT4PBox.style.display = "grid";
        
            }
        else {
            PAT4PBox.style.display = "none";
                PAT4Perc.value = 0;
            }
        if (checkPAT5.checked === true){
            PAT5PBox.style.display = "grid";
        
            }
        else {
            PAT5PBox.style.display = "none";
                PAT5Perc.value = 0;
            }
        if (checkPAT6.checked === true){
            PAT6PBox.style.display = "grid";
        
            }
        else {
            PAT6PBox.style.display = "none";
                PAT6Perc.value = 0;
            }
        if (checkPAT71.checked === true){
            PAT71PBox.style.display = "grid";
        
            }
        else {
            PAT71PBox.style.display = "none";
                PAT71Perc.value = 0;
            }
        if (checkPAT72.checked === true){
            PAT72PBox.style.display = "grid";
        
            }
        else {
            PAT72PBox.style.display = "none";
                PAT72Perc.value = 0;
            }
        if (checkPAT73.checked === true){
            PAT73PBox.style.display = "grid";
        
            }
        else {
            PAT73PBox.style.display = "none";
                PAT73Perc.value = 0;
            }
        if (checkPAT74.checked === true){
            PAT74PBox.style.display = "grid";
        
            }
        else {
            PAT74PBox.style.display = "none";
                PAT74Perc.value = 0;
            }
        if (checkPAT75.checked === true){
            PAT75PBox.style.display = "grid";
        
            }
        else {
            PAT75PBox.style.display = "none";
                PAT75Perc.value = 0;
            }
        if (checkPAT76.checked === true){
            PAT76PBox.style.display = "grid";
        
            }
        else {
            PAT76PBox.style.display = "none";
                PAT76Perc.value = 0;
            }
        if (checkPAT77.checked === true){
            PAT77PBox.style.display = "grid";
        
            }
        else {
            PAT77PBox.style.display = "none";
                PAT77Perc.value = 0;
            }
        if (checkSAMAN09.checked === true){
            SAMAN09PBox.style.display = "grid";
        
            }
        else {
            SAMAN09PBox.style.display = "none";
                SAMAN09Perc.value = 0;
            }
        if (checkSAMAN19.checked === true){
            SAMAN19PBox.style.display = "grid";
        
            }
        else {
            SAMAN19PBox.style.display = "none";
                SAMAN19Perc.value = 0;
            }
        if (checkSAMAN29.checked === true){
            SAMAN29PBox.style.display = "grid";
        
            }
        else {
            SAMAN29PBox.style.display = "none";
                SAMAN29Perc.value = 0;
            }
        if (checkSAMAN39.checked === true){
            SAMAN39PBox.style.display = "grid";
        
            }
        else {
            SAMAN39PBox.style.display = "none";
                SAMAN39Perc.value = 0;
            }
        if (checkSAMAN49.checked === true){
            SAMAN49PBox.style.display = "grid";
        
            }
        else {
            SAMAN49PBox.style.display = "none";
                SAMAN49Perc.value = 0;
            }
        if (checkSAMAN59.checked === true){
            SAMAN59PBox.style.display = "grid";
        
            }
        else {
            SAMAN59PBox.style.display = "none";
                SAMAN59Perc.value = 0;
            }
        if (checkSAMAN69.checked === true){
            SAMAN69PBox.style.display = "grid";
        
            }
        else {
            SAMAN69PBox.style.display = "none";
                SAMAN69Perc.value = 0;
            }
        if (checkSAMAN89.checked === true){
            SAMAN89PBox.style.display = "grid";
        
            }
        else {
            SAMAN89PBox.style.display = "none";
                SAMAN89Perc.value = 0;
            }
        if (checkSAMAN99.checked === true){
            SAMAN99PBox.style.display = "grid";
        
            }
        else {
            SAMAN99PBox.style.display = "none";
                SAMAN99Perc.value = 0;
            }
      }