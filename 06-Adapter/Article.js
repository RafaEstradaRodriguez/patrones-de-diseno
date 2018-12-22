export default class Article
{
    constructor(inputData)
    {
        this.content = inputData;
    }

    render()
    {
        let htmlResult = "";

        if (this.content.title) {
            htmlResult += this.renderHeadline(this.content.title);
        }

        if (this.content.subheadline) {
            htmlResult += this.renderSubheadline(this.content.subheadline);
        }

        if (this.content.publishDate) {
            htmlResult += this.renderDate(this.content.publishDate);
        }

        return htmlResult;
    }

    renderHeadline(content)
    {
        return `<h1 class="headline">${content.replace(/\*\*(.*)\*\*/, `<b>$1</b>`)}</h1>`;
    }

    renderSubheadline(content)
    {
        return `<h2 class="subheadline">${content.replace(/\*\*(.*)\*\*/, `<b>$1</b>`)}</h2>`
    }

    renderDate(content)
    {
        return `<time datetime="${content}">${content}</timedate>`
    }
}
