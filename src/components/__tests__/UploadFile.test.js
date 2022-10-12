/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UploadFile from '../game-intro/UploadFile';

describe("Test file uploader", () => {
  test('check upload button renders', () => {
    const { container } = render(<UploadFile />);

    const fileInputElement = container.getElementsByClassName("fileUpload");

    expect(fileInputElement).toBeTruthy();
  });

  test('check start-reminder renders', () => {
    render(<UploadFile />);
    const startReminder = screen.getByText(/please select the file to upload \(\.tsv only\)/i);
    expect(startReminder).toBeInTheDocument();
  });

  test('check next button disabled while not upload file', () => {
    render(<UploadFile />);
    const nextBtn = screen.getByText(/next/i).closest('button');
    expect(nextBtn).toBeDisabled();
  });

  test('check next button enabled while file already uploaded', async () => {
    const { getByTestId, container } = render(<UploadFile />);

    const inputElement = screen.getByTestId(/fileDrop/i);

    const file = new File([new ArrayBuffer(1)], "sample.fr2en.all.tsv", {
      type: "text/tsv"
    });

    userEvent.upload(inputElement, file)

    const nextBtn = screen.getByText(/next/i).closest('button');
    expect(nextBtn).not.toBeEnabled();
  });
});


