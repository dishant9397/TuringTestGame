/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import UploadFile from '../UploadFile';

describe("Test file uploader", () => {
  test('check upload button renders', () => {
    render(<UploadFile />);
    const uploadBtn = screen.getByRole('button', { name: /upload/i })
    expect(uploadBtn).toBeInTheDocument();
  });

  test('check start-reminder renders', () => {
    render(<UploadFile />);
    const startReminder = screen.getByText(/please upload the tsv file!/i);
    expect(startReminder).toBeInTheDocument();
  });

  // wait for backend implementation
  // test("Uploading file should show its name", () => {
  //   const { container } = render(<UploadFile />);

  //   const { getByLabelText, getByText } = render(<UploadFile />);
  //   const inputElement = container.getElementsByClassName("inputClass");

  //   const file = new File([], "sample.fr2en.all.tsv", {
  //     type: "text/tsv"
  //   });

  //   Object.defineProperty(inputElement, "files", {
  //     value: [file]
  //   });

  //   fireEvent.change(inputElement);

  //   screen.getByText("sample.fr2en.all.tsv");
  // });
});


