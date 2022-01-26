class Contact {

    constructor(firstName, lastName, phone, email) {

        this.divTitleTextContent = `${firstName} ${lastName}`;
        this.phoneTextContent = `\u260E ${phone}`;
        this.emailTextContent = `\u2709 ${email}`;
        this._online = false;
        this.divTitleElement = document.createElement('div');

    }

    get online() {

        return this._online;

    }

    set online(value) {

        this._online = value;

        if (this._online === true) {
            
            this.divTitleElement.classList.add('online');

        } else {

            this.divTitleElement.classList.remove('online');

        }

    }

    render(id) {

        const articleElement = document.createElement('article');
        this.divTitleElement.textContent = this.divTitleTextContent;

        const btnElement = document.createElement('button');
        btnElement.textContent = `\u2139`;
        this.divTitleElement.appendChild(btnElement);
        this.divTitleElement.classList.add('title');

        articleElement.appendChild(this.divTitleElement);
        
        const divInfoElement = document.createElement('div');
        divInfoElement.classList.add('info');
        divInfoElement.style.display = 'none';
        const spanPhoneElement = document.createElement('span');
        spanPhoneElement.textContent = this.phoneTextContent;
        divInfoElement.appendChild(spanPhoneElement);

        const spanEmailElement = document.createElement('span');
        spanEmailElement.textContent = this.emailTextContent;
        divInfoElement.appendChild(spanEmailElement);

        articleElement.appendChild(divInfoElement);

        btnElement.addEventListener('click', collapseInfo);

        document.getElementById(id).appendChild(articleElement);

        function collapseInfo(ev) {

            if (divInfoElement.style.display === 'block') {
                
                divInfoElement.style.display = 'none';

            } else {

                divInfoElement.style.display = 'block';

            }
        
        }
    }
}

let contact = new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com");
  contact.online = true;
  contact.render('holder');
const art = document.querySelector('#holder article');
console.log(art.className);
  