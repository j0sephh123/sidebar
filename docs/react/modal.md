## What does it do
A simple modal component

## Website
[Github](https://github.com/reactjs/react-modal)

## Installation
`react-modal`

## Minimal 
```jsx
import ReactModal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
<ReactModal
  isOpen={modal.open}
  contentLabel="Example Modal"
  style={customStyles}
  ariaHideApp={false}
>
    <p>content</p>
    <button onClick={() => { setModal... }}>Close</button>
</ReactModal>
```

`isOpen` - toggler
`contentLabel` - I think we just need it
`style` - I suggest just using this basic one and upgrading from there
`ariaHideApp={false}` otherwise it will throw an error for screen readers

## Usage
Just toggle `isOpen`, have basic styles and you are good to go

## Advanced Usage 
I haven't needed to explore that yet.