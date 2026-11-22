import data from '../../data/sections/certificates.json';
import { CertificatesClient } from './CertificatesClient';

export const Certificates = () => {
  return (
    <CertificatesClient
      heading={data.heading}
      eyebrow={data.eyebrow}
      description={data.description}
      certificates={data.certificates}
    />
  );
};

export default Certificates;
