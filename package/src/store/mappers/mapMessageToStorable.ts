import type { MessageResponse } from 'stream-chat';

import type { DefaultStreamChatGenerics } from '../../types/types';
import type { MessageRow } from '../types';

export const mapMessageToStorable = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics,
>(
  message: MessageResponse<StreamChatGenerics>,
): MessageRow => {
  const {
    attachments,
    cid,
    created_at,
    deleted_at,
    id,
    text,
    type,
    updated_at,
    user,
    ...extraData
  } = message;

  return {
    attachments: JSON.stringify(attachments),
    cid: cid || '',
    createdAt: created_at || '',
    deletedAt: deleted_at || '',
    extraData: JSON.stringify(extraData),
    id,
    text,
    type,
    updatedAt: updated_at || '',
    user: JSON.stringify(user || {}),
  };
};