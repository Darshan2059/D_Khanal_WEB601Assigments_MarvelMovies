class ContentList{
  private contentArray: Content[] =[];
  constructor(){}
get content(): Content[]{
    return this.contentArray;
}
  add(item: Content) {
    this.contentArray.push(item);
  }
  count(): number{
    return this.contentArray.length;
  }

}
