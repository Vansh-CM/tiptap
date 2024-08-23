import {
  BetweenHorizonalEnd,
  BetweenHorizonalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  Bold,
  ChevronDown,
  ChevronsUpDown,
  Clipboard,
  Code,
  CodeXml,
  Columns2,
  Columns3,
  Columns4,
  Copy,
  Eraser,
  Frame,
  GripVertical,
  Heading1,
  Heading2,
  Heading3,
  ImageUp,
  IndentDecrease,
  IndentIncrease,
  Italic,
  Link,
  List,
  ListOrdered,
  ListTodo,
  LoaderCircle,
  Maximize,
  Minimize,
  Minus,
  PaintRoller,
  PanelLeft,
  PanelRight,
  Pencil,
  Plus,
  Quote,
  Redo2,
  Replace,
  Sigma,
  SmilePlus,
  SmilePlusIcon,
  Sparkles,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCellsMerge,
  TableCellsSplit,
  Trash,
  Trash2,
  Type,
  Underline,
  Undo2,
  Unlink,
  Video,
} from 'lucide-react'
import {
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@radix-ui/react-icons'
import ImportWord from './ImportWord'
import {
  AspectRatio,
  BlockquoteLeft,
  DeleteColumn,
  DeleteRow,
  FileWordOutline,
  FormatLineHeight,
  MenuDown,
  SizeL,
  SizeM,
  SizeS,
} from '@/components/icons'
import { ExportPdf } from '@/components/icons/ExportPdf'
import ExportWord from '@/components/icons/ExportWord'

export const icons = {
  Bold,
  LoaderCircle,
  Italic,
  Underline,
  Quote,
  TextQuote: BlockquoteLeft,
  Strikethrough,
  Minus,
  Eraser,
  PaintRoller,
  Redo2,
  Undo2,
  AlignCenter: TextAlignCenterIcon,
  AlignJustify: TextAlignJustifyIcon,
  AlignLeft: TextAlignLeftIcon,
  AlignRight: TextAlignRightIcon,
  ChevronDown,
  Subscript,
  Superscript,
  Code,
  Code2: CodeXml,
  Type,
  IndentIncrease,
  IndentDecrease,
  List,
  ListOrdered,
  ListTodo,
  Link,
  ImageUp,
  Video,
  Maximize,
  Minimize,
  Table,
  Sparkles,
  Pencil,
  Unlink,
  BetweenHorizonalEnd,
  BetweenHorizonalStart,
  BetweenVerticalStart,
  BetweenVerticalEnd,
  TableCellsMerge,
  TableCellsSplit,
  Trash2,
  Trash,
  Replace,
  ChevronsUpDown,
  LineHeight: FormatLineHeight,
  Word: FileWordOutline,
  Heading1,
  Heading2,
  Heading3,
  Columns2,
  Columns3,
  Columns4,
  Plus,
  Grip: GripVertical,
  Copy,
  Clipboard,
  PanelLeft,
  PanelRight,
  Columns: Columns2,
  Iframe: Frame,

  MenuDown,
  SizeS,
  SizeM,
  SizeL,
  AspectRatio,

  Emoji: SmilePlus,

  DeleteColumn,
  DeleteRow,
  SearchAndReplace: Replace,
  EmojiIcon: SmilePlusIcon,
  KatexIcon: Sigma,
  ExportPdf,
  ExportWord,
  ImportWord,
} as any
