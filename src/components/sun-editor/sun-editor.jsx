import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const SunEditorComponent = ({ _ref }) => {
  const editorRef = _ref;

  const options = {
    height: 300,
    buttonList: [
      [`undo`, `redo`],
      [`bold`, `underline`, `italic`],
      [`fontColor`, `hiliteColor`],
      [`font`, `fontSize`, `formatBlock`],
      [`align`, `horizontalRule`, `list`, `blockquote`],
      [`table`, `link`, `image`],
      [`fullScreen`, `showBlocks`],
      [`preview`, `print`],
    ],
    colorList: [
      [`#ccc`, `#dedede`, `OrangeRed`, `Orange`, `RoyalBlue`, `SaddleBrown`],
    ],
    toolbarContainer: `sun-editor sun-editor_toolbar`,
  };

  return (
    <Wrapper>
      <SunEditor setOptions={options} ref={editorRef} />
    </Wrapper>
  );
};

SunEditorComponent.propTypes = {
  _ref: PropTypes.shape({ current: PropTypes.any }).isRequired,
};

export default SunEditorComponent;
