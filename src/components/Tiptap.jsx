import React from "react"
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react"
import Placeholder from "@tiptap/extension-placeholder"
import CharacterCount from '@tiptap/extension-character-count'
import Underline from "@tiptap/extension-underline"
import StarterKit from "@tiptap/starter-kit"
import useGetText from "../zustand/useGetText"
import { CiFileOn, CiImageOn } from "react-icons/ci"
import { IoMdAttach } from "react-icons/io"

const Tiptap = () => {
    const { setContent } = useGetText();

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Placeholder.configure({
                placeholder: 'Write something …',
                emptyEditorClass: 'is-editor-empty',
            }),
            CharacterCount.configure({
            }),
        ],
        editorProps: {
            attributes: {
                class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
            },
        },
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML())
        },
    })

    if (!editor) {
        return null
    }

    const MenuButton = ({ action, isActive, children }) => (
        <button
            onClick={() => editor.chain().focus()[action]().run()}
            className={`py-1 px-2 rounded ${isActive ? "bg-blue-200 text-blue-900" : "bg-white text-gray-700"
                } hover:bg-gray-100 transition-colors`}
        >
            {children}
        </button>
    )

    const menuButtons = [
        { action: "toggleBold", isActive: () => editor.isActive("bold"), label: <b>B</b> },
        { action: "toggleItalic", isActive: () => editor.isActive("italic"), label: <i>I</i> },
        { action: "toggleStrike", isActive: () => editor.isActive("strike"), label: <s>S</s> },
        { action: "setParagraph", isActive: () => editor.isActive("paragraph"), label: "P" },
        { action: "toggleUnderline", isActive: () => editor.isActive("underline"), label: <u>U</u> },
    ]

    return (
        <div className="flex flex-col">
            <div className="toolbar flex justify-between bg-gray-100">
                <div className="flex space-x-2 p-2">
                    {menuButtons.map((button, index) => (
                        <MenuButton key={index} action={button.action} isActive={button.isActive()}>
                            {button.label}
                        </MenuButton>
                    ))}
                </div>
                <div className="flex justify-end items-center text-xl flex-row space-x-4 p-2">
                    <span><CiFileOn /></span>
                    <span><CiImageOn /></span>
                    <span><IoMdAttach /></span>
                </div>
            </div>

            <div className="flex-grow overflow-auto p-4 h-[60vh]">
                <EditorContent editor={editor} />
            </div>

            {editor && (
                <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <div className="flex space-x-2 bg-white border rounded shadow-lg p-1">
                        {menuButtons.map((button, index) => (
                            <MenuButton key={index} action={button.action} isActive={button.isActive()}>
                                {button.label}
                            </MenuButton>
                        ))}
                    </div>
                </BubbleMenu>
            )}

            <div className="mt-8 flex flex-row justify-between">
                <span className="text-sm">Last saved at Oct 4, 2023, 10:34pm</span>
                <span>{editor.storage.characterCount.characters()} Characters</span>
            </div>
        </div>
    )
}

export default Tiptap