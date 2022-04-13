console.log('This is my Library site');
 class Book {
    constructor(name, writer, type) {
        this.name = name;
        this.writer = writer;
        this.type = type;
    }

}

class display {
    AddBook(book) {
        console.log('added');
        let tblbody = document.getElementById("tblbody");
        let text = ` <tr>
      <td>${book.name}</td>
      <td>${book.writer}</td>
      <td>${book.type}</td>
    </tr>`;
        tblbody.innerHTML += text;


    }

    clear() {
        let libraryform = document.getElementById("libform");
        libraryform.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.writer.length < 2) {
            return false;

        }
        else { return true }

    }
    displaymsg(type, dispMsg) {
        let mesg = document.getElementById('msg');
        let txt;
        if (type === 'success') {
            txt = 'Success';

        } else {
            txt = 'Error!';

        }
        mesg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
      <strong> ${txt}: </strong> ${dispMsg}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true"></span>
      </button>
  </div>`;
        setTimeout(function () {
            msg.innerHTML = '';
        }, 7000
,) 
    }

}

let libraryform = document.getElementById('libform');
libraryform.addEventListener('submit',libraryformsubmit);

function libraryformsubmit(e) {
    console.log('Form submited');
    let name = document.getElementById('bookname').value;
    let writer = document.getElementById('writer').value;
    let type;

    let Edu = document.getElementById('Education');
    let Entert = document.getElementById('Entertainment');
    let fict = document.getElementById('fiction');
   


    if (Edu.checked) {
        type = Edu.value;
    }
    else if (Entert.checked) {
        type = Entert.value;
    }
    else if (fict.checked) {
        type = fict.value;
    }
    let book = new Book(name, writer, type);
    console.log(book);
    let Display = new display();


    if (Display.validate(book)) {

        Display.AddBook(book);
        Display.clear();
        Display.displaymsg('Successful', 'You Book has been Added');
    }
    else {
        Display.displaymsg('Failed', ' Sorry You book has not been added...');
    }
    e.preventDefault();
} 
/* class Book{
    
    constructor(Mybook,Written,typeOf)
   {
       Mybook=this.Mybook;
       Written=this.Written;
       typeOf=this.typeOf;
   }
   
}
let book =new Book('Ahqam e Shariah','Mufti Amjad yaaar khan','Religious');
console.log(book); */