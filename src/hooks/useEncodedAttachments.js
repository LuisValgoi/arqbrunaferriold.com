import { useEffect, useState } from 'react';

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const useEncodedAttachments = (plantas) => {
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    plantas.forEach(async (attachment) => {
      setAttachments([
        ...attachments,
        {
          content: await getBase64(attachment),
          filename: attachment.name,
          type: attachment.type,
          disposition: 'attachment',
          content_id: attachment.uid,
        },
      ]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plantas]);

  return attachments;
};
