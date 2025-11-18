export interface AccordionItemProps {
  panelId: string;
  expanded: boolean;
  handleChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
  title: string;
  composer: string;
  details: JSX.Element;
  grade?: string;
  time?: string;
  year?: string;
  conductor?: string;
  soloist?: string;
  publisher?: string;
  publisherWebsiteURL?: string;
}
