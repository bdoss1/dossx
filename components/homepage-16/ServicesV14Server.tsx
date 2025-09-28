import getMarkDownData from '@/utils/GetMarkDownData';
import ServicesV14Client, { ServicesType } from './ServicesV14Client';

const ServicesV14Server = async () => {
  // Point to your existing MD directory (Voxia / QuotaX / Synapse / etc.)
  // e.g., /data/app-development/<slug>.md with frontmatter: title, description, feature[]
  const loadedData = getMarkDownData('data/app-development') as ServicesType[];

  return <ServicesV14Client loadedData={loadedData} />;
};

export default ServicesV14Server;