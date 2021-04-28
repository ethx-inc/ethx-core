import React, { FC, useState } from 'react';

import { SectionText } from '../../../atoms/section-text/src';
import { SubmitButton } from '../../../atoms/submit-button-atom/src';
import { NavButton } from '../../../atoms/nav-button-atom/src/NavButton.atom';
import { TextInput } from '../../../atoms/text-input-atom/src';

export interface ChangeEmailFormProps {
	/* Props here */
	title: string;
	onSubmit;
	onGoBack;
}

export const ChangeEmailForm: FC<ChangeEmailFormProps> = ({
	title,
	onSubmit,
	onGoBack,
}: ChangeEmailFormProps) => {
	const [field, setField] = useState('');
	const [confirmField, setConfirmField] = useState('');

	return (
		<form
			onSubmit={event =>
				onSubmit(event, {
					field,
					confirmField,
				})
			}
			className='flex flex-col h-1/2 justify-between items-center max-w-2xl w-full '>
			<SectionText title={`change ${title}`} />

			<TextInput
				placeholder={title}
				type={title}
				css='mb-3'
				onChange={event => setField(event.target.value)}
				required
				value={field}
			/>
			<TextInput
				placeholder={`confirm ${title}`}
				type={title}
				css='mb-3'
				onChange={event => setConfirmField(event.target.value)}
				required
				value={confirmField}
			/>
			<SubmitButton title={`change ${title}`} css='mb-3' />
			<NavButton label='back' onClick={() => onGoBack()} />
		</form>
	);
};
