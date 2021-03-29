export default class hideList{
    constructor(listBlock, autoHeight = false) {
        this.autoHeight = autoHeight;
        this.listBlock = listBlock;
        this.list = this.listBlock.querySelector('[data-block]');
        this.listBlock.querySelector('[data-btn]').addEventListener('click', ()=>{this.showBlock()})
        if (this.listBlock.querySelector('[data-btn]').classList.contains('active')) {
            this.list.style.height = `${this.list.scrollHeight}px`;
            this.list.classList.add('active')
        }
    }
    showBlock(){
        let blockHeight = parseInt(window.getComputedStyle(this.list).getPropertyValue('height'));
        if (blockHeight === 0){
            if (this.autoHeight){
                this.list.style.height = `auto`;
            } else {
                this.list.style.height = `${this.list.scrollHeight}px`;
            }
            this.listBlock.querySelector('[data-btn]').classList.add('active');
            this.list.classList.add('active')
        } else {
            this.listBlock.querySelector('[data-btn]').classList.remove('active');
            this.list.classList.remove('active')
            this.list.style.height = `0`
        }
    }
}