import GoogleButton from "./buttons/GoogleButton";
import DemoButton from "./buttons/DemoButton";
import ContinueButton from "./buttons/ContinueButton";
import DownloadFileButton from "./buttons/DownloadFileButton";
import FaceBookButton from "./buttons/FaceBookButton";
import CreateNewChatbotButton from "./buttons/CreateNewChatbotButton";
import UpdateKnowledgeButton from "./buttons/UpdateKnowledgeButton";
import EndSessionButton from "./buttons/EndSessionButton";
import DoneAndProcessingButton from "./buttons/DoneAndProcessing";
import VerifyDnsButton from "./buttons/VerifyDnsButton";
import VerifyingDNSButton from "./buttons/VerifyingDNSButton";
import AddButton from "./buttons/AddButton";
import BrowseFilesButton from "./buttons/BrowseFileButton";
import CustomizeColor from "./buttons/CustomizeColorButton";
import ChatWithBotInterface from "./interface/ChatWithBotInterface";
import CopyCode from "./interface/CopyCode";
import DragAndDropInterface from "./interface/DragAndDropInterface";
import AskAnythingInterface from "./interface/AskAnythingInterface";
import SystemOverviewInterface from "./interface/SystemOverViewInterface";
import UploadDocumentsInterface from "./interface/UploadDocumentsInterface";
import MultipleDocumentUploadInterface from "./interface/UploadMultipleDocumentInterface";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-2xl font-bold mb-6">Button Preview</h1>

      <div className="flex flex-col gap-4">

        <GoogleButton />
        <DemoButton />
        <ContinueButton />
        <DownloadFileButton />
        <FaceBookButton />
        <CreateNewChatbotButton />
        <UpdateKnowledgeButton />
        <EndSessionButton />
        <DoneAndProcessingButton />
        <VerifyDnsButton />
        <VerifyingDNSButton />
        <AddButton />
        <BrowseFilesButton />
        <CustomizeColor />
        <ChatWithBotInterface />
        <CopyCode />
        <DragAndDropInterface />
        <AskAnythingInterface />
        <SystemOverviewInterface />
        <UploadDocumentsInterface />
        <MultipleDocumentUploadInterface /> 
      

      </div>
    </div>
  );
}
