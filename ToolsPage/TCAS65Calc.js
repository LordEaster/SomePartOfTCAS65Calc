import React, { useEffect } from "react";

import "../css/styles.scss"
import "../css/TCAS65Calc.scss";

import { TCAS65CalcFunc } from "../js/TCAS65CalcFunc";
import { USEPerc } from "../js/TCAS65USEPercFunc";

export default function TCAS65Calc() {

    useEffect(
        () => {
            document.onload = TCAS65CalcFunc();
            document.onload = USEPerc();
            document.title = 'TCAS65 Calculator | w/Yamroll';
        });

    return (
        <div>
        <div style={{"margin":"1rem","alignItems":"center"}}>
        <div style={{"display":"grid","placeContent":"center", "textAlign":"center"}}>
        <img src="https://raw.githubusercontent.com/LordEaster/ICON-LOGO/main/YamBanner.png" alt="YamYam" style={{ "display":"flex", "placeContent":"center", "width":"60vw", "minWidth":"384px" }} onContextMenu={(e) => {e.preventDefault()}} />
        <p class="h1">Just Simple TCAS65 Calculator</p>
        </div>
        <div style={{"placeContent":"center"}}>

        <div class="panel InputGPA"><h5><b>GPAX</b></h5>
        <form class = "formpanel row g-3">
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="GPAXC" onClick={ USEPerc }>
                </input> GPAX
                </label>score
                <input type="number" min="0" class="form-control" id="GPAXSc"/>
                <div id="GPAXPBox">Percentage
                <input type="number" min="0" class="form-control" id="GPAXPerc"/>
                </div>
                </div>
            </form>
        </div>

        <div class="panel InputGAT"><h5><b>GAT</b></h5><div style={{"color":"red"}}>*ไม่ได้สอบให้เว้นไว้</div>
            <form class = "formpanel row g-3">
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="GAT1C" onClick={ USEPerc }>
                </input> GAT 1 (เชื่อมโยง)
                </label>score
                <input type="number" min="0" class="form-control" id="GAT1Sc"/>
                <div id="GAT1PBox">Percentage
                <input type="number" min="0" class="form-control" id="GAT1Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="GAT2C" onClick={ USEPerc }>
                </input> GAT 2 (ENG)
                </label>score
                <input type="number" min="0" class="form-control" id="GAT2Sc" />
                <div id="GAT2PBox">
                Percentage
                <input type="number" min="0" class="form-control" id="GAT2Perc"/>
                </div>
                </div>
            </form>
        </div>

        <div class="panel InputPAT"><h5><b>PAT</b></h5><div style={{"color":"red"}}>*ไม่ได้สอบให้เว้นไว้</div>
            <form class = "formpanel row g-3">
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT1C" onClick={ USEPerc }>
                </input> PAT 1 ความถนัดทางคณิตศาสตร์
                </label>score
                <input type="number" min="0" class="form-control" id="PAT1Sc" />
                <div id="PAT1PBox">
                Percentage
                <input type="number" min="0" class="form-control" id="PAT1Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT2C" onClick={ USEPerc }>
                </input> PAT 2 ความถนัดทางวิทยาศาสตร์
                </label>score
                <input type="number" min="0" class="form-control" id="PAT2Sc" />
                <div id="PAT2PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT2Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT3C" onClick={ USEPerc }>
                </input> PAT 3 ความถนัดทางวิศวกรรมศาสตร์
                </label>score
                <input type="number" min="0" class="form-control" id="PAT3Sc" />
                <div id="PAT3PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT3Perc"/>
                </div>
                </div>        
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT4C" onClick={ USEPerc }>
                </input> PAT 4 ความถนัดทางสถาปัตยกรรมศาสตร์
                </label>score
                <input type="number" min="0" class="form-control" id="PAT4Sc" />
                <div id="PAT4PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT4Perc"/>
                </div>
                </div>        
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT5C" onClick={ USEPerc }>
                </input> PAT 5 ความถนัดทางวิชาชีพครู
                </label>score
                <input type="number" min="0" class="form-control" id="PAT5Sc" />
                <div id="PAT5PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT5Perc"/>
                </div>
                </div>        
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT6C" onClick={ USEPerc }>
                </input> PAT 6 ความถนัดทางศิลปกรรมศาสตร์
                </label>score
                <input type="number" min="0" class="form-control" id="PAT6Sc" />
                <div id="PAT6PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT6Perc"/>
                </div>
                </div>        
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT71C" onClick={ USEPerc }>
                </input> PAT 7.1 ความถนัดทางภาษาฝรั่งเศส
                </label>score
                <input type="number" min="0" class="form-control" id="PAT71Sc" />
                <div id="PAT71PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT71Perc"/>
                </div>
                </div>        
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT72C" onClick={ USEPerc }>
                </input> PAT 7.2 ความถนัดทางภาษาเยอรมัน
                </label>score
                <input type="number" min="0" class="form-control" id="PAT72Sc" />
                <div id="PAT72PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT72Perc"/>
                </div>
                </div>        
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT73C" onClick={ USEPerc }>
                </input> PAT 7.3 ความถนัดทางภาษาญี่ปุ่น
                </label>score
                <input type="number" min="0" class="form-control" id="PAT73Sc" />
                <div id="PAT73PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT73Perc"/>
                </div>
                </div>        
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT74C" onClick={ USEPerc }>
                </input> PAT 7.4 ความถนัดทางภาษาจีน
                </label>score
                <input type="number" min="0" class="form-control" id="PAT74Sc" />
                <div id="PAT74PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT74Perc"/>
                </div>
                </div>        
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT75C" onClick={ USEPerc }>
                </input> PAT 7.5 ความถนัดทางภาษาอาหรับ
                </label>score
                <input type="number" min="0" class="form-control" id="PAT75Sc" />
                <div id="PAT75PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT75Perc"/>
                </div>
                </div>        
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT76C" onClick={ USEPerc }>
                </input> PAT 7.6 ความถนัดทางภาษาบาลี
                </label>score
                <input type="number" min="0" class="form-control" id="PAT76Sc" />
                <div id="PAT76PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT76Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="PAT77C" onClick={ USEPerc }>
                </input> PAT 7.7 ความถนัดทางภาษาเกาหลี
                </label>score
                <input type="number" min="0" class="form-control" id="PAT77Sc" />
                <div id="PAT77PBox">Percentage
                <input type="number" min="0" class="form-control" id="PAT77Perc"/>
                </div>
                </div>

            </form>
        </div>

        <div class="panel InputSAMAN"><h5><b>วิชาสามัญ</b></h5><div style={{"color":"red"}}>*ไม่ได้สอบให้เว้นไว้</div>
        <form class = "formpanel row g-3">
        <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="SAMAN09C" onClick={ USEPerc }>
                </input> วิชาสามัญ 09 ภาษาไทย
                </label>score
                <input type="number" min="0" class="form-control" id="SAMAN09Sc" />
                <div id="SAMAN09PBox">Percentage
                <input type="number" min="0" class="form-control" id="SAMAN09Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="SAMAN19C" onClick={ USEPerc }>
                </input> วิชาสามัญ 19 สังคมศึกษา
                </label>score
                <input type="number" min="0" class="form-control" id="SAMAN19Sc" />
                <div id="SAMAN19PBox">Percentage
                <input type="number" min="0" class="form-control" id="SAMAN19Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="SAMAN29C" onClick={ USEPerc }>
                </input> วิชาสามัญ 29 ภาษาอังกฤษ
                </label>score
                <input type="number" min="0" class="form-control" id="SAMAN29Sc" />
                <div id="SAMAN29PBox">Percentage
                <input type="number" min="0" class="form-control" id="SAMAN29Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="SAMAN39C" onClick={ USEPerc }>
                </input> วิชาสามัญ 39 คณิตศาสตร์ 1
                </label>score
                <input type="number" min="0" class="form-control" id="SAMAN39Sc" />
                <div id="SAMAN39PBox">Percentage
                <input type="number" min="0" class="form-control" id="SAMAN39Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="SAMAN49C" onClick={ USEPerc }>
                </input> วิชาสามัญ 49 ฟิสิกส์
                </label>score
                <input type="number" min="0" class="form-control" id="SAMAN49Sc" />
                <div id="SAMAN49PBox">Percentage
                <input type="number" min="0" class="form-control" id="SAMAN49Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="SAMAN59C" onClick={ USEPerc }>
                </input> วิชาสามัญ 59 เคมี
                </label>score
                <input type="number" min="0" class="form-control" id="SAMAN59Sc" />
                <div id="SAMAN59PBox">Percentage
                <input type="number" min="0" class="form-control" id="SAMAN59Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="SAMAN69C" onClick={ USEPerc }>
                </input> วิชาสามัญ 69 ชีววิทยา
                </label>score
                <input type="number" min="0" class="form-control" id="SAMAN69Sc" />
                <div id="SAMAN69PBox">Percentage
                <input type="number" min="0" class="form-control" id="SAMAN69Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="SAMAN89C" onClick={ USEPerc }>
                </input> วิชาสามัญ 89 คณิตศาสตร์ 2
                </label>score
                <input type="number" min="0" class="form-control" id="SAMAN89Sc" />
                <div id="SAMAN89PBox">Percentage
                <input type="number" min="0" class="form-control" id="SAMAN89Perc"/>
                </div>
                </div>
                <div class="ItemInput col-md-1">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="SAMAN99C" onClick={ USEPerc }>
                </input> วิชาสามัญ 99 วิทยาศาสตร์ทั่วไป
                </label>score
                <input type="number" min="0" class="form-control" id="SAMAN99Sc" />
                <div id="SAMAN99PBox">Percentage
                <input type="number" min="0" class="form-control" id="SAMAN99Perc"/>
                </div>
                </div>
            </form>
        </div>

        <div class="selectpanel">
        <button type="button" class="btn btn-success" id="TCAS65CalcSubmitbtn" onClick={ TCAS65CalcFunc }>Submit</button>
        </div>


        <div class="panel summarypanel" id="summarypanel"><h5><b>Summary</b></h5>
        <div id="sumscore100">

        </div>
        <div id="sumscore30k">

        </div>
        </div>
        </div>
        </div>
        <div id="footer">
        <a href='/'>
        <button className='btn btn-outline-secondary'>Back to w/Yamroll</button>
        </a>
        </div>
        </div>
        
    );
}