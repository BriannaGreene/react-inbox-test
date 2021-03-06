import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'
// import 'font-awesome/css/font-awesome.css'

class Toolbar extends React.Component {

  //constructor?

  //render
  render() {
    return (
      // TOOLBAR: WITH COMPOSE BUTTON
      <div class="row toolbar">
        <div class="col-md-12">
          <p class="pull-right">
            <span class="badge badge">2</span>
            unread messages
          </p>

          <a class="btn btn-danger">
            <i class="fa fa-plus"></i>
          </a>

          <button class="btn btn-default">
            <i class="fa fa-minus-square-o"></i>
          </button>

          <button class="btn btn-default">Mark As Read</button>

          <button class="btn btn-default">Mark As Unread</button>

          <select class="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select class="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button class="btn btn-default">
            <i class="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }

}


export default Toolbar

// TOOLBAR: ALL MESSAGES SELECTED
// <div class="row toolbar">
//   <div class="col-md-12">
//     <p class="pull-right">
//       <span class="badge badge">2</span>
//       unread messages
//     </p>
//
//     <button class="btn btn-default">
//       <i class="fa fa-check-square-o"></i>
//     </button>
//
//     <button class="btn btn-default">
//       Mark As Read
//     </button>
//
//     <button class="btn btn-default">
//       Mark As Unread
//     </button>
//
//     <select class="form-control label-select">
//       <option>Apply label</option>
//       <option value="dev">dev</option>
//       <option value="personal">personal</option>
//       <option value="gschool">gschool</option>
//     </select>
//
//     <select class="form-control label-select">
//       <option>Remove label</option>
//       <option value="dev">dev</option>
//       <option value="personal">personal</option>
//       <option value="gschool">gschool</option>
//     </select>
//
//     <button class="btn btn-default">
//       <i class="fa fa-trash-o"></i>
//     </button>
//   </div>
// </div>


// TOOLBAR: SOME MESSAGES SELECTED
// <div class="row toolbar">
//   <div class="col-md-12">
//     <p class="pull-right">
//       <span class="badge badge">2</span>
//       unread messages
//     </p>
//
//     <button class="btn btn-default">
//       <i class="fa fa-minus-square-o"></i>
//     </button>
//
//     <button class="btn btn-default">
//       Mark As Read
//     </button>
//
//     <button class="btn btn-default">
//       Mark As Unread
//     </button>
//
//     <select class="form-control label-select">
//       <option>Apply label</option>
//       <option value="dev">dev</option>
//       <option value="personal">personal</option>
//       <option value="gschool">gschool</option>
//     </select>
//
//     <select class="form-control label-select">
//       <option>Remove label</option>
//       <option value="dev">dev</option>
//       <option value="personal">personal</option>
//       <option value="gschool">gschool</option>
//     </select>
//
//     <button class="btn btn-default">
//       <i class="fa fa-trash-o"></i>
//     </button>
//   </div>
// </div>


// TOOLBAR: NO MESSAGES SELECTED
// <div class="row toolbar">
//   <div class="col-md-12">
//     <p class="pull-right">
//       <span class="badge badge">2</span>
//       unread messages
//     </p>
//
//     <button class="btn btn-default">
//       <i class="fa fa-square-o"></i>
//     </button>
//
//     <button class="btn btn-default" disabled="disabled">
//       Mark As Read
//     </button>
//
//     <button class="btn btn-default" disabled="disabled">
//       Mark As Unread
//     </button>
//
//     <select class="form-control label-select" disabled="disabled">
//       <option>Apply label</option>
//       <option value="dev">dev</option>
//       <option value="personal">personal</option>
//       <option value="gschool">gschool</option>
//     </select>
//
//     <select class="form-control label-select" disabled="disabled">
//       <option>Remove label</option>
//       <option value="dev">dev</option>
//       <option value="personal">personal</option>
//       <option value="gschool">gschool</option>
//     </select>
//
//     <button class="btn btn-default" disabled="disabled">
//       <i class="fa fa-trash-o"></i>
//     </button>
//   </div>
// </div>
