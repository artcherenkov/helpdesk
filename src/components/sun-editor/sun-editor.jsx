import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import {saveText} from '../../store/action';

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const SunEditorComponent = ({saveResult, _ref}) => {
  const editorRef = _ref;

  const options = {
    height: 300,
    buttonList: [
      ['undo', 'redo'],
      ['bold', 'underline', 'italic'],
      ['fontColor', 'hiliteColor'],
      ['font', 'fontSize', 'formatBlock'],
      ['align', 'horizontalRule', 'list', 'blockquote'],
      ['table', 'link', 'image'],
      ['fullScreen', 'showBlocks'],
      ['preview', 'print'],
    ],
    colorList: [
      ['#ccc', '#dedede', 'OrangeRed', 'Orange', 'RoyalBlue', 'SaddleBrown']
    ],
    toolbarContainer: `sun-editor sun-editor_toolbar`
  }

  return (
    <Wrapper>
      <SunEditor setOptions={options} ref={editorRef} />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveResult(text) {
    dispatch(saveText(text));
  }
});

export {SunEditorComponent};
export default connect(null, mapDispatchToProps)(SunEditorComponent);