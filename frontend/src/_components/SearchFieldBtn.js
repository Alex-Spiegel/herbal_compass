function SearchfieldBtn({
  placeholderText,
  buttonText,
  onInputChange,
  onButtonClick,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <input
        className="max-w-2xl flex-1 p-3 text-gray-800 border border-gray-700 rounded-full"
        type="text"
        placeholder={placeholderText}
        onChange={onInputChange} // Event-Handler für Textänderungen
      />
      <button
        className="px-6 py-3 text-white bg-green-800 border border-gray-700 rounded-full font-semibold hover:bg-green-900"
        type="submit"
        onClick={onButtonClick} // Event-Handler für den Button
      >
        {buttonText}
      </button>
    </div>
  );
}

export default SearchfieldBtn;
