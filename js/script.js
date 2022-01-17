'use strict';

(() => {

    const formHandler = {
        form: null,
        formItems: null,
        checkbox: null,
        formData: {},

        getForm() {
            this.form = document.getElementById('form');
            return this.form;
        },

        getFormItems() {
            this.formItems = document.querySelectorAll('input, select, textarea');
            return this.formItems;
        },

        checkboxValue() {
            this.checkbox = document.querySelector('.form-check-input');
            this.checkbox.addEventListener('change', () => {
                this.checkbox.value = this.checkbox.checked ? true : false;
            })
        },

        clearForm() {
            this.checkbox.value = false;
            this.form.reset();
        },

        setData() {
            for(const elem of this.formItems) {
                this.formData[elem.name] = elem.value;
                if (elem.value === ''|| !elem.value.trim()) this.formData[elem.name] = 'no data';
            }
            return this.formData;
        },

        setLocalData() {
            localStorage.setItem('formData', JSON.stringify(this.formData));
        },

        initEvent() {
            this.form.addEventListener('submit', event => {
                event.preventDefault();
                this.setData();
                this.setLocalData();
                this.clearForm();
            });
        },

        init() {
            this.getForm();
            this.getFormItems();
            this.checkboxValue();
            this.initEvent();
        }
    };

    formHandler.init();

})();