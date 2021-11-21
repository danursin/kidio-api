CREATE TABLE [kidio].[Turn] (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[book_id] [int] NOT NULL,
	[time] INT NOT NULL,
	CONSTRAINT [PK_Kidio_Turn_id] PRIMARY KEY CLUSTERED ([id] ASC)
)
GO

ALTER TABLE [kidio].[Turn] WITH CHECK ADD CONSTRAINT [FK_Kidio_Turn_book_id_Book_id] FOREIGN KEY([book_id]) REFERENCES [kidio].[Book] ([id])