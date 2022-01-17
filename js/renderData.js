'use strict';

(() => {

    const formDataHandler = {
        list: null,
        formData: null,
        
        createList() {
            this.list = document.createElement('ul');
            this.list.style.cssText = 'list-style: none';
            return this.list;
        },

        getData() {
            this.formData = JSON.parse(localStorage.getItem('formData'));
            return this.formData;
        },

        renderData() {
            const arrKeys = [];
            for(const key in this.formData) {
                const li = document.createElement('li');
                arrKeys.push(key);
                arrKeys.forEach(key => {
                    li.innerHTML = `${key}: ${this.formData[key]}`
                })
                this.list.append(li);
            }
            document.body.append(this.list);
        },

        init() {
            this.createList();
            this.getData();
            this.renderData();
        },
    };

    formDataHandler.init();

})();