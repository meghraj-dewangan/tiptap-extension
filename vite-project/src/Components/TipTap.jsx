
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import React, { useCallback } from 'react';
import TextStyle from '@tiptap/extension-text-style';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import { FontFamily } from '@tiptap/extension-font-family';
import { Color } from '@tiptap/extension-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faImage, faSubscript, faSuperscript,faAlignLeft,faAlignRight,faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import './NewPost.css';

const extensions = [
    StarterKit, Underline, Image, FontFamily, Color, TextStyle.configure({ mergeNestedSpanStyles: true }), Subscript, Superscript,
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    }),

]

const content = ``


function TipTap({ onEditorContentSave }) {

    const editor = useEditor({
        extensions,
        content,
    });
    if (!editor) {
        return null;
    }


    const addImage = useCallback(() => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    if (!editor) {
        return null
    }

    function handleEditorContent() {
        const html = editor.getHTML();

        onEditorContentSave(html);
    }



    function handleFontFamilyChange(event) {
        const fontFamily = event.target.value;
        editor.chain().focus().setFontFamily(fontFamily).run();
    }

    function handleTextColorChange(event) {
        const color = event.target.value;
        editor.chain().focus().setColor(color).run();
    }





    return (
        <div>

            <div className='toolbar'>
                <button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
                    <strong>B</strong>
                </button>


                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can().chain().focus().toggleItalic().run()
                    }
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    <em>I</em>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    disabled={
                        !editor.can().chain().focus().toggleUnderline().run()
                    }
                    className={editor.isActive('underline') ? 'is-active' : ''}
                >
                    <u>U</u>
                </button>


                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can().chain().focus().toggleStrike().run()
                    }
                    className={editor.isActive('strike') ? 'is-active' : ''}
                ><s>S</s></button>



                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can().chain().focus().toggleStrike().run()
                    }
                    className={editor.isActive('code') ? 'is-active' : ''}
                ><FontAwesomeIcon icon={faCode} /></button>

                <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                    Clearmarks
                </button>

                <select onChange={handleFontFamilyChange}>
                    <option value="">Select Font</option>
                    <option value="Calibri">Calibri</option>
                    <option value="Arial">Arial</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Algerian">Algerian</option>
                    <option value="Arial Black">Arial Black</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Verdana">Verdana</option>
                </select>

                <input type="color" onChange={handleTextColorChange} />

                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
                >
                    <FontAwesomeIcon icon={faAlignLeft} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
                >
                    <FontAwesomeIcon icon={faAlignCenter} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
                >
                    <FontAwesomeIcon icon={faAlignRight} />
                </button>


                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    P
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    h1
                </button>


                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    h2
                </button>


                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    h3
                </button>


                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
                >
                    h4
                </button>


                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
                >
                    h5
                </button>


                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
                >
                    h6
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleSubscript().run()}
                    disabled={
                        !editor.can().chain().focus().toggleSubscript().run()
                    }
                    className={editor.isActive('Subscript') ? 'is-active' : ''}
                ><FontAwesomeIcon icon={faSubscript} /></button>


                <button
                    onClick={() => editor.chain().focus().toggleSuperscript().run()}
                    disabled={
                        !editor.can().chain().focus().toggleSuperscript().run()
                    }
                    className={editor.isActive('Superscript') ? 'is-active' : ''}
                ><FontAwesomeIcon icon={faSuperscript} /></button>


                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    Ol
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    Ul
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                    Blockquote
                </button>

                <button onClick={addImage}><FontAwesomeIcon icon={faImage} /></button>

                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can().chain().focus().undo().run()

                    }
                >
                    undo
                </button>

                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can().chain().focus().redo().run()

                    }
                >
                    redo
                </button>








            </div>

            <div className='editor-content'>
                <EditorContent editor={editor} />
            </div>

            <button className='save-button' onClick={handleEditorContent}>Save</button>



        </div>
    )
}
export default TipTap;