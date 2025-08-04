import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Meme Making App
          </h1>
          <p className="text-gray-600">
              Craft amusing memes with tailored messages and photos
          </p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Controls Panel */}
            <div className="lg:col-span-1 space-y-4">
            <UploadControls
              onImageUpload={handleImageUpload}
              onReset={resetCanvas}
            />
            <TextControls
              hasImage={!!image}
              onAddText={addText}
              selectedId={selectedId}
              textElements={textElements}
              onUpdateText={updateText}
              onDeleteText={deleteText}
            />
            <ExportControls hasImage={!!image} onExport={exportImage} />
          </div>
           {/* Canvas Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Canvas</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <MemeCanvas
                  image={image}
                  stageRef={stageRef}
                  stageSize={stageSize}
                  textElements={textElements}
                  onSelectText={setSelectedId}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
