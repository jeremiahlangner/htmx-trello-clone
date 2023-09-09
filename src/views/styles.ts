const Styles = `
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

code {
    font-family: source-code-pro,Menlo,Monaco,Consolas,"Courier New",monospace
}

.app {
    background: #3465a4;
    height: 100vh
}

.header {
    background: rgba(0,0,0,.15);
    color: #fff;
    padding: 5px 0;
    border-bottom: 1px solid rgba(0,0,0,.12);
    text-align: center;
    font-size: 40px;
    font-weight: 200
}

.board {
    height: 92%;
    display: -webkit-flex;
    display: flex;
    overflow-x: auto
}

.add-list {
    width: 272px;
    margin: 10px;
    -webkit-flex-shrink: 0;
    flex-shrink: 0
}

.add-list-button {
    background-color: rgba(0,0,0,.12);
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    min-height: 32px;
    padding: 5px 8px;
    transition: background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content
}

.add-list-button:hover {
    background-color: rgba(0,0,0,.24)
}


.list {
    background: #dfe3e6;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    width: 272px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    margin: 10px 0 10px 10px;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.12)
}

.list-title {
    cursor: pointer;
    padding: 10px;
    overflow-wrap: break-word
}

.toggle-add-card {
    cursor: pointer;
    padding: 10px;
    color: #333;
    border-radius: 0 0 4px 4px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    border: none;
    width: 100%;
}

.toggle-add-card:hover {
    background-color: rgba(9,45,66,.13);
    color: #17394d;
    text-decoration: underline
}


.card {
    position: relative;
    cursor: grab;
    background: #fff;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.12);
    box-shadow: 0 1px 0 rgba(9,45,66,.25);
    font-size: 15px;
    overflow-wrap: break-word;
    min-height: 18px
}

.card:hover {
    background: #f5f6f7
}

.card-icons {
    position: absolute;
    top: 5px;
    right: 5px;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: flex-end;
    justify-content: flex-end
}

.card-icon,.card-icons {
    display: -webkit-flex;
    display: flex
}

.card-icon {
    cursor: pointer;
    width: 24px;
    height: 24px;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    border-radius: 5px;
    margin: 1px;
    color: rgba(0,0,0,.5);
    background: #f5f6f7;
    opacity: .9;
    border: none;
}

.card-icon:hover {
    opacity: 1;
    background: #dcdcdc
}

.edit-card .card {
    min-height: 50px;
    padding-left: 8px;
    padding-right: 15px
}

.edit-card .card:hover {
    background: #fff
}

.edit-card-textarea {
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    font-size: 15px
}

.edit-buttons {
    display: -webkit-flex;
    display: flex
}

.edit-button {
    cursor: pointer;
    box-shadow: 0 1px 0 0 #3f6f21;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 5px 10px;
    padding: 6px 12px;
    border-radius: 5px;
    border: none;
    color: #fff;
    outline: none
}

.edit-button:hover {
    opacity: .7
}

.edit-button-cancel {
    cursor: pointer;
    margin-bottom: 10px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    font-size: 20px;
    opacity: .5;
    outline: none;
    padding:0;
    border: none;
}

.edit-button-cancel:hover {
    opacity: 1
}

.list-title-edit {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}


.list-title-textarea {
    margin: 6px 0 5px 6px;
    border-radius: 3px;
    border: none;
    resize: none;
    outline: none;
    font-size: 15px;
    padding: 5px
}

.list-title-textarea:focus {
    box-shadow: inset 0 0 0 2px #0079bf
}

.add-list-editor {
    background: #dfe3e6;
    border-radius: 5px;
    padding: 2px
}



.hidden {
  display: none;
}
`;

export default Styles;
