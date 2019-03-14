document.getElementById("addb").onclick=function(){
    document.getElementById("textchange").value="";
    document.getElementById("textchange1").value="";
  
    
  };
  
  function success() {
    if(document.getElementById("newSectionName").value==="") { 
              document.getElementById('addNewSection').disabled = true; 
          } else { 
              document.getElementById('addNewSection').disabled = false;
          }
          if(document.getElementById("targetSectionName").value==="") { 
              document.getElementById('deleteSection').disabled = true; 
          } else { 
              document.getElementById('deleteSection').disabled = false;
          }
          if(document.getElementById("Description").value==="") { 
              document.getElementById('DescriptionButton').disabled = true; 
          } else { 
              document.getElementById('DescriptionButton').disabled = false;
          }
          if(document.getElementById("textchange").value==="") { 
            document.getElementById('con2').disabled = true; 
        } else { 
            document.getElementById('con2').disabled = false;
        }
        if(document.getElementById("textchange1").value==="") { 
            document.getElementById('con2').disabled = true; 
        } else { 
            document.getElementById('con2').disabled = false;
        }
        if(document.getElementById("sectionName").value==="") { 
            document.getElementById('onesize').disabled = true; 
            document.getElementById('multisize').disabled = true; 

        } else { 
            document.getElementById('onesize').disabled = false;
            document.getElementById('multisize').disabled = false;

        }
        if(document.getElementById("newObjectName").value==="") { 
            document.getElementById('onesize').disabled = true; 
            document.getElementById('multisize').disabled = true; 

        } else { 
            document.getElementById('onesize').disabled = false;
            document.getElementById('multisize').disabled = false; 

        }
        if(document.getElementById("newObjectDescription").value==="") { 
            document.getElementById('onezie').disabled = true; 
            document.getElementById('multisize').disabled = true; 

        } else { 
            document.getElementById('onesize').disabled = false;
            document.getElementById('multisize').disabled = false; 

        }

        if(document.getElementById("textchange4").value==="" && document.getElementById("textchange5").value==="") { 
            document.getElementById('editf').disabled = true; 
            document.getElementById('sizef').disabled = true;
            document.getElementById('pricef').disabled = true; 
            document.getElementById('addf').disabled = true; 
 

        } else { 
            document.getElementById('editf').disabled = false; 
            document.getElementById('sizef').disabled = false;
            document.getElementById('pricef').disabled = false; 
            document.getElementById('addf').disabled = false; 

        }



      }