
var rIndex,
                table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    nama = document.getElementById("nama").value,
                    address = document.getElementById("address").value,
                    age = document.getElementById("age").value;
                    gender = document.getElementById("gender").value;
            
                if(nama === ""){
                    alert("Nama gabisa kosong");
                    isEmpty = true;
                }
                else if(address === ""){
                    alert("Alamat gabisa kosong");
                    isEmpty = true;
                }
                else if(age === ""){
                    alert("Umur gabisa kosong");
                    isEmpty = true;
                }
                else if(gender === ""){
                    alert("Silahkan pilih Jenis Kelamin");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    nama = document.getElementById("nama").value,
                    address = document.getElementById("address").value,
                    age = document.getElementById("age").value;
                    gender = document.getElementById("gender").value;
            
                cell1.innerHTML = nama;
                cell2.innerHTML = address;
                cell3.innerHTML = age;
                cell4.innerHTML = gender;
                // call the function to set the event to the new row
                selectedRowToInput();
            }
            }
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("nama").value = this.cells[0].innerHTML;
                      document.getElementById("address").value = this.cells[1].innerHTML;
                      document.getElementById("age").value = this.cells[2].innerHTML;
                      document.getElementById("gender").value = this.cells[3].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var nama = document.getElementById("nama").value,
                    address = document.getElementById("address").value,
                    age = document.getElementById("age").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = nama;
                table.rows[rIndex].cells[1].innerHTML = address;
                table.rows[rIndex].cells[2].innerHTML = age;
                table.rows[rIndex].cells[3].innerHTML = gender;
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("nama").value = "";
                document.getElementById("address").value = "";
                document.getElementById("age").value = ""; 
                document.getElementById("gender").value = "";       }