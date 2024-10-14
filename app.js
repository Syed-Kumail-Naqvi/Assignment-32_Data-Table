 
var studentsSno = [1,2,3,4,5,6,7,8,9,10]
var studentsName = [];
var studentsRollNum = [];
var studentsHTML = [];
var studentsCSS = [];
var studentsPerf = []


function studentsData() {

    var name = document.getElementById('name').value;
    var rollNum = document.getElementById('rollNum').value;

    var html = parseInt(document.getElementById('html').value);
    var css = parseInt(document.getElementById('css').value);

    studentsName.push(name);
    studentsRollNum.push(rollNum);
    studentsHTML.push(html);
    studentsCSS.push(css);



    if(studentsHTML[0]<=100 && studentsCSS[0] <= 100){
        
        var Std1perf = ((studentsHTML[0]+studentsCSS[0])/200 * 100).toFixed(2);
        
    }else{

        Std1perf = 'enter correct numbers'

    }
    studentsPerf.push(Std1perf);

    document.getElementById('1:1').innerHTML = studentsSno[0];
    document.getElementById('name1').innerHTML = studentsName[0];
    document.getElementById('rollnum1').innerHTML = studentsRollNum[0];
    document.getElementById('html1').innerHTML = studentsHTML[0];
    document.getElementById('css1').innerHTML = studentsCSS[0]; 
    document.getElementById('perf1').innerHTML = `${studentsPerf[0]}%`; 
 
    if(studentsHTML[1] !== undefined && studentsCSS[1] !== undefined){
    if(studentsHTML[1] <= 100 && studentsCSS[1] <= 100) {

        var Std2perf = ((studentsHTML[1] + studentsCSS[1]) / 200 * 100).toFixed(2);

    } else {

        Std2perf = 'enter correct numbers'

    };
    }

    if(studentsHTML[1] !== undefined && studentsCSS[1] !== undefined){
                                                                 
        studentsPerf.splice(1,0,Std2perf);
    }

    if(studentsHTML[1] !== undefined && studentsCSS[1] !== undefined){
        document.getElementById('2:1').innerHTML = studentsSno[1];
        document.getElementById('name2').innerHTML = studentsName[1];
        document.getElementById('rollnum2').innerHTML = studentsRollNum[1];
        document.getElementById('html2').innerHTML = studentsHTML[1];
        document.getElementById('css2').innerHTML = studentsCSS[1];
        document.getElementById('perf2').innerHTML = `${studentsPerf[1]}%`;
    }

    if(studentsHTML[2] !== undefined && studentsCSS[2] !== undefined){ 
        if(studentsHTML[2] <= 100 && studentsCSS[2] <= 100) {
    
            var Std3perf = ((studentsHTML[2] + studentsCSS[2]) / 200 * 100).toFixed(2);
    
        } else {
    
            Std3perf = 'enter correct numbers'
    
        };
        }
               
        if(studentsHTML[1] !== undefined && studentsCSS[1] !== undefined){
                                                                     
            studentsPerf.splice(2,0,Std3perf);
        }

            if(studentsHTML[2] !== undefined && studentsCSS[2] !== undefined){
            document.getElementById('3:1').innerHTML = studentsSno[2];
            document.getElementById('name3').innerHTML = studentsName[2];
            document.getElementById('rollnum3').innerHTML = studentsRollNum[2];
            document.getElementById('html3').innerHTML = studentsHTML[2];
            document.getElementById('css3').innerHTML = studentsCSS[2];
            document.getElementById('perf3').innerHTML = `${studentsPerf[2]}%`;
        }
 
        if(studentsHTML[3] !== undefined && studentsCSS[3] !== undefined){
 
            if(studentsHTML[3] <= 100 && studentsCSS[3] <= 100){

                var Std4perf = ((studentsHTML[3] + studentsCSS[3]) / 200 * 100).toFixed(2);

            } else{

                Std4perf = 'enter correct numbers';

            }
        }


        if(studentsHTML[3] !== undefined && studentsCSS[3] !== undefined){

            studentsPerf.splice(3,0,Std4perf); 

        }
        

        if(studentsHTML[3] !== undefined && studentsCSS[3] !== undefined){
            document.getElementById('4:1').innerHTML = studentsSno[3];
            document.getElementById('name4').innerHTML = studentsName[3];
            document.getElementById('rollnum4').innerHTML = studentsRollNum[3];
            document.getElementById('html4').innerHTML = studentsHTML[3];
            document.getElementById('css4').innerHTML = studentsCSS[3];
            document.getElementById('perf4').innerHTML = `${studentsPerf[3]}%`; 
        }
    



 
        if(studentsHTML[4] !== undefined && studentsCSS[4] !== undefined){
 
            if(studentsHTML[4] <= 100 && studentsCSS[4] <= 100){

                var Std5perf = ((studentsHTML[4] + studentsCSS[4]) / 200 * 100).toFixed(2);

            } else{

                Std5perf = 'enter correct numbers';

            }
        }

        if(studentsHTML[4] !== undefined && studentsCSS[4] !== undefined){

            studentsPerf.splice(4,0,Std5perf); 

        }
        
        if(studentsHTML[4] !== undefined && studentsCSS[4] !== undefined){
            document.getElementById('5:1').innerHTML = studentsSno[4];
            document.getElementById('name5').innerHTML = studentsName[4];
            document.getElementById('rollnum5').innerHTML = studentsRollNum[4];
            document.getElementById('html5').innerHTML = studentsHTML[4];
            document.getElementById('css5').innerHTML = studentsCSS[4];
            document.getElementById('perf5').innerHTML = `${studentsPerf[4]}%`; 
        }
    


}
 
function removeAll(){

    studentsSno = [];
    studentsName = [];
    studentsRollNum = [];
    studentsHTML = [];
    studentsCSS = [];
    studentsPerf = [];

    document.getElementById('1:1').innerHTML= studentsSno;
    document.getElementById('name1').innerHTML = studentsName;
    document.getElementById('rollnum1').innerHTML = studentsRollNum;
    document.getElementById('html1').innerHTML = studentsHTML;
    document.getElementById('css1').innerHTML = studentsCSS;
    document.getElementById('perf1').innerHTML = studentsPerf;


    document.getElementById('2:1').innerHTML = studentsSno;
    document.getElementById('name2').innerHTML = studentsName;
    document.getElementById('rollnum2').innerHTML = studentsRollNum;
    document.getElementById('html2').innerHTML = studentsHTML;
    document.getElementById('css2').innerHTML = studentsCSS;
    document.getElementById('perf2').innerHTML = studentsPerf;

    document.getElementById('3:1').innerHTML = studentsSno;
    document.getElementById('name3').innerHTML = studentsName;
    document.getElementById('rollnum3').innerHTML = studentsRollNum;
    document.getElementById('html3').innerHTML = studentsHTML;
    document.getElementById('css3').innerHTML = studentsCSS;
    document.getElementById('perf3').innerHTML = studentsPerf;

    document.getElementById('4:1').innerHTML = studentsSno;
    document.getElementById('name4').innerHTML = studentsName;
    document.getElementById('rollnum4').innerHTML = studentsRollNum;
    document.getElementById('html4').innerHTML = studentsHTML;
    document.getElementById('css4').innerHTML = studentsCSS;
    document.getElementById('perf4').innerHTML = studentsPerf;


    document.getElementById('5:1').innerHTML = studentsSno;
    document.getElementById('name5').innerHTML = studentsName;
    document.getElementById('rollnum5').innerHTML = studentsRollNum;
    document.getElementById('html5').innerHTML = studentsHTML;
    document.getElementById('css5').innerHTML = studentsCSS;
    document.getElementById('perf5').innerHTML = studentsPerf;

}
 
function removeFirst(){
    
    studentsSno = [];
    studentsName = [];
    studentsRollNum = [];
    studentsHTML = [];
    studentsCSS = [];
    studentsPerf = [];

    document.getElementById('1:1').innerHTML= studentsSno;
    document.getElementById('name1').innerHTML = studentsName;
    document.getElementById('rollnum1').innerHTML = studentsRollNum;
    document.getElementById('html1').innerHTML = studentsHTML;
    document.getElementById('css1').innerHTML = studentsCSS;
    document.getElementById('perf1').innerHTML = studentsPerf;

}
 
function removeLast(){


    studentsSno = [];
    studentsName = [];
    studentsRollNum = [];
    studentsHTML = [];
    studentsCSS = [];
    studentsPerf = [];
    
    document.getElementById('5:1').innerHTML = studentsSno;
    document.getElementById('name5').innerHTML = studentsName;
    document.getElementById('rollnum5').innerHTML = studentsRollNum;
    document.getElementById('html5').innerHTML = studentsHTML;
    document.getElementById('css5').innerHTML = studentsCSS;
    document.getElementById('perf5').innerHTML = studentsPerf;
}
