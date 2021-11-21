CREATE TABLE [kidio].[Book] (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [varchar](255) NOT NULL,
	[cover_image_url] [varchar](500) NULL,
	[audio_file_key] [uniqueidentifier] NULL,
	CONSTRAINT [PK_Kidio_Book_id] PRIMARY KEY CLUSTERED ([id] ASC)
)