/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from '@testing-library/react';
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

  test('check next button while file already uploaded', async () => {
    render(<UploadFile />);

    const inputElement = screen.getByTestId(/fileDrop/i);
    var TSV = [
      '"val1"\t"val2"\t"val3"\t"val4"\t"val5"\t"val6"\t"val7"'
    ];
    var contentType = 'text/tsv';

    var tsvFile = new Blob([TSV], { type: contentType });

    userEvent.upload(inputElement, tsvFile)

    const nextBtn = screen.getByRole('button', { name: /next/i })
    expect(nextBtn).toBeInTheDocument();
  });
});


